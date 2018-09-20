#!/bin/bash
MUSIC="./0"
BITRATE=60k
find "${MUSIC}" -name "*.mp3" -execdir echo "{}" \; -exec mv "{}" "{}.mp3" \; -exec ffmpeg -y -i "{}.mp3" -acodec libmp3lame  -ab $BITRATE "{}" \; -exec rm "{}.mp3" \;
