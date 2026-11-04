# AWS Login Demo

A serverless login application built using AWS services, Node.js, and DynamoDB. The project demonstrates authentication, serverless backend development, cloud hosting, and automated deployment using GitHub Actions.

## Project Overview

The application provides a login interface connected to a serverless backend hosted on AWS.

Users submit their credentials through the frontend. The backend validates the credentials against user records stored in Amazon DynamoDB and records login activity.

## Architecture

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js
- **Compute:** AWS Lambda
- **API:** Amazon API Gateway
- **Database:** Amazon DynamoDB
- **Frontend Hosting:** Amazon S3
- **Content Delivery:** Amazon CloudFront
- **Infrastructure as Code:** AWS SAM
- **CI/CD:** GitHub Actions

## Features

- User login authentication
- Password verification using bcrypt
- User records stored in DynamoDB
- Login activity tracking
- Health-check endpoint
- Serverless backend architecture
- Automated deployment workflow

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Checks backend availability |
| POST | `/login` | Authenticates user credentials |

### Login Request

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

## Project Structure

```text
login-demo/
│
├── backend/
│   ├── index.js
│   ├── auth.js
│   ├── dynamodb.js
│   └── package.json
│
├── frontend/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── template.yaml
├── samconfig.toml
├── index.html
└── script.js
```

## Local Development

### Prerequisites

- Node.js
- AWS CLI
- AWS SAM CLI
- Docker
- Git

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

### AWS Deployment

Build the application:

```bash
sam build
```

Deploy using AWS SAM:

```bash
sam deploy --guided
```

## CI/CD

GitHub Actions is used to automate the deployment workflow.

The workflow is configured to verify AWS credentials, check CloudFormation access, and deploy the application using AWS SAM.

## Project Objective

The objective of this project is to understand and implement serverless application development using AWS, including API integration, database operations, infrastructure automation, and CI/CD.

## Author

**Nithish Nagendra**

GitHub: [nithish-ui](https://github.com/nithish-ui)
