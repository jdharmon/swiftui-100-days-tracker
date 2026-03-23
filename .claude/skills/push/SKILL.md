---
name: push
description: Commit outstanding changes and push to remote. Use /push or /push dev for the develop branch, /push prod to merge develop into master and push master.
disable-model-invocation: false
user-invocable: true
---

You are deploying this project. Follow these steps exactly based on the argument provided.

The argument is: $ARGUMENTS

---

## If argument is empty or "dev"

Deploy to the **develop** branch:

1. Run `git status` to check for uncommitted changes.
2. If there are uncommitted changes:
   - Stage all changed/untracked files relevant to the project (avoid secrets like `.env`).
   - Review staged files and write a concise commit message summarizing the changes.
   - Commit using the standard commit format with `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`.
3. Confirm the current branch is `develop`. If not, warn the user and stop.
4. Push `develop` to remote: `git push origin develop`
5. Report success with the commit message (if a commit was made) and push result.

---

## If argument is "prod"

Deploy to **production** (master branch):

1. Confirm the current branch is `develop`. If not, warn the user and stop.
2. Run `git status` to check for uncommitted changes.
3. If there are uncommitted changes on `develop`:
   - Stage all changed/untracked files relevant to the project (avoid secrets like `.env`).
   - Review staged files and write a concise commit message summarizing the changes.
   - Commit using the standard commit format with `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`.
4. Push `develop` to remote: `git push origin develop`
5. Switch to `master`: `git checkout master`
6. Merge `develop` into `master`: `git merge develop --no-edit`
7. Push `master` to remote: `git push origin master`
8. Switch back to `develop`: `git checkout develop`
9. Report success with a summary of what was committed (if anything) and the branches pushed.

---

## General rules

- Never use `--force` or `--no-verify`.
- Never commit `.env`, credential files, or secrets.
- If any step fails, stop and report the error clearly — do not continue past a failure.
- Always pass commit messages via heredoc to preserve formatting.
