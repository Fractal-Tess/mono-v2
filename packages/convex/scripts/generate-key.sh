
# Get the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/../.env"
BASENAME=$(basename "$(dirname "$SCRIPT_DIR")")

# Generate the key and get only the key value (redirect "Admin key:" to /dev/null)
KEY=$(docker exec ${BASENAME}-convex-1 ./generate_admin_key.sh 2>&1 | grep "Admin key:" > /dev/null && docker exec ${BASENAME}-convex-1 ./generate_admin_key.sh 2>&1 | grep -v "Admin key:")

# Generate the key and format it with the variable name
KEY_LINE=$(echo "$KEY" | sed -n 's/^/CONVEX_SELF_HOSTED_ADMIN_KEY=/p')

if [ -z "$KEY_LINE" ]; then
    echo "Error: Failed to generate key"
    exit 1
fi

# Print the generated key
echo "Generated key:"
echo "$KEY"
echo

# Check if the env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "No .env file found"
fi

# Check if the key already exists in the file
if grep -q '^CONVEX_SELF_HOSTED_ADMIN_KEY=' "$ENV_FILE"; then
    # Replace existing key
    sed -i.bak "s/^CONVEX_SELF_HOSTED_ADMIN_KEY=.*/$KEY_LINE/" "$ENV_FILE"
    rm -f "$ENV_FILE.bak"
    echo "Updated existing key in .env file"
else
    # Append new key
    echo "$KEY_LINE" >> "$ENV_FILE"
    echo "Added new key to .env file"
fi