#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git branch -M master &&
git remote add origin https://github.com/liuxianjin/money-website.git&&
git push -u origin master -f
cd -
