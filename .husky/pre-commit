#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

if git grep -rli "// TEMP" -- ":!docs/" ":!.husky/"
then
exit 1
fi

npm run build
git add .