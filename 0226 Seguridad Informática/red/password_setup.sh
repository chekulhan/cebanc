#!/bin/bash

# Usage check
if [ "$#" -ne 1 ]; then
    echo "Usage: sudo $0 <username>"
    exit 1
fi

USERNAME="$1"

# Check if user exists
if ! id "$USERNAME" &>/dev/null; then
    echo "Error: user '$USERNAME' does not exist"
    exit 1
fi

# Generate a random password (12 chars)
PASSWORD=$(openssl rand -base64 12)

# Set the password
echo "$USERNAME:$PASSWORD" | chpasswd

# Force password to be marked as set
passwd -u "$USERNAME" &>/dev/null

echo "======================================"
echo "Password set successfully"
echo "User: $USERNAME"
echo "Password: $PASSWORD"
echo "======================================"
