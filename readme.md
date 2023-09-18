# Pulumi Implementation for Appwrite on Hetzner Cloud

This repository provides a Pulumi blueprint written in TypeScript for deploying [Appwrite](https://appwrite.io/) on Hetzner Cloud. 

## Getting Started

### Prerequisites
- A [Hetzner Cloud](https://www.hetzner.com/cloud) account.
- An API token generated from Hetzner Cloud. This allows Pulumi to access and manage your Hetzner Cloud resources.

### Deployment Steps

1. **Clone the Repository and Install Dependencies**
    ```bash
    git clone [YOUR_REPO_LINK]
    cd [YOUR_REPO_DIRECTORY]
    npm install
    ```

2. **Update the Cloud Init Configuration**:
    - Open `cloudInitConfig.yaml` in an editor.
    - Replace `[YOUR_APPWRITE_DOCKERCOMPOSE_AND_.ENV_FILE_FROM_GIT_REPO]` on line 20 with the link to your GitHub repository containing the Appwrite `docker-compose` file and `.env` file.

3. **Configure the Hetzner Cloud Settings**:
    - In `index.ts`:
        - Specify your desired Hetzner cloud instance type on line 10.
        - Specify the desired region for your Appwrite instance on line 12.
    - Visit the [Hetzner Cloud website](https://www.hetzner.com/cloud) to view all available instance types and regions.

4. **Deploy Using Pulumi**:
    ```bash
    pulumi up
    ```

Once deployed, you should have Appwrite running on a Hetzner Cloud instance configured to your preferences.

## Feedback and Contributions

Feel free to open an issue or submit a pull request if you have suggestions or improvements!
