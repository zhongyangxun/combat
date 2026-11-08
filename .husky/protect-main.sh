#!/usr/bin/env sh
# 本地主分支保护：拦截在 main/master 上直接提交，以及推送到远端 main/master。
# 这只是本地护栏，不是安全边界：git commit/push --no-verify 等方式都能绕过，
# 真正的强制保护需要在远端配置分支保护规则。
#
# 用法：
#   sh .husky/protect-main.sh pre-commit
#   sh .husky/protect-main.sh pre-push <remote-name> <remote-url>  （ref 列表从 stdin 读取）

PROTECTED_BRANCHES="main master"

is_protected() {
  for protected in $PROTECTED_BRANCHES; do
    [ "$1" = "$protected" ] && return 0
  done
  return 1
}

check_commit() {
  # 分离 HEAD（如 rebase 过程中）没有当前分支，不在此处拦截。
  branch=$(git symbolic-ref --quiet --short HEAD 2>/dev/null) || return 0

  if is_protected "$branch"; then
    echo "🚫 不允许直接在 '$branch' 分支上提交。" >&2
    echo "   请先创建功能分支，例如：git switch -c feat/PUZ-123-description" >&2
    echo "   然后通过 Pull Request 合并到 '$branch'。" >&2
    return 1
  fi
}

check_push() {
  remote_name=${1:-remote}
  blocked=0

  # git 每行提供：<local ref> <local sha> <remote ref> <remote sha>。
  # 逐行检查目标 ref，覆盖 HEAD:main、other:main、多 ref 推送和 --all/--mirror。
  while read -r local_ref local_sha remote_ref _remote_sha || [ -n "$local_ref" ]; do
    [ -n "$remote_ref" ] || continue

    case "$remote_ref" in
      refs/heads/*) branch=${remote_ref#refs/heads/} ;;
      *) continue ;;
    esac

    is_protected "$branch" || continue

    # 删除远端 main/master 同样被拦截（local sha 全为 0）。
    case "$local_sha" in
      *[!0]*) action="推送 $local_ref 到" ;;
      *) action="删除" ;;
    esac

    echo "🚫 不允许${action} $remote_name 的受保护分支 '$branch'（$remote_ref）。" >&2
    blocked=1
  done

  if [ "$blocked" -ne 0 ]; then
    echo "   请推送功能分支并通过 Pull Request 合并。" >&2
    return 1
  fi
}

case "${1:-}" in
  pre-commit)
    check_commit
    ;;
  pre-push)
    shift
    check_push "$@"
    ;;
  *)
    echo "protect-main.sh: unknown mode '${1:-}' (expected pre-commit or pre-push)" >&2
    exit 2
    ;;
esac
