#!/bin/bash

# ===== CONFIG =====
REPORT_DIR="/var/log/system-health"
REPORT_FILE="$REPORT_DIR/report-$(date +%F).log"

# ===== CREATE DIR IF NEEDED =====
mkdir -p "$REPORT_DIR"

# ===== COLLECT DATA =====
{
  echo "=============================="
  echo " System Health Report"
  echo " Date: $(date)"
  echo " Host: $(hostname)"
  echo "=============================="
  echo

  echo ">>> Uptime"
  uptime
  echo

  echo ">>> Disk Usage"
  df -h
  echo

  echo ">>> Memory Usage"
  free -h
  echo

  echo ">>> CPU Load"
  top -bn1 | head -n 5
  echo

} >> "$REPORT_FILE"
