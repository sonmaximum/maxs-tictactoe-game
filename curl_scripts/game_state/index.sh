#!/bin/bash

curl "http://tic-tac-toe.wdibos.com/games${OVER}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
