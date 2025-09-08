# Perch API Documentation

Comprehensive developer documentation for Perch's API platform and embeddable tools.

## Overview

This documentation covers Perch's complete API ecosystem including:

### API References
- **Partner API** - Integration for mortgage partner platforms
- **Realtor API** - Real estate professional tools and data access  
- **Advisor API** - Financial advisor workflow management
- **Support API** - Customer support and service operations
- **Tools API** - Embeddable widget and calculator management

### Developer Guides
- **Getting Started** - Authentication, API fundamentals, and setup
- **Core Concepts** - Understanding leads, plans, and data relationships
- **Embeddable Tools** - Mortgage calculators and rate displays for websites
- **Implementation Guides** - Step-by-step integration instructions

## Quick Links

- **Live Documentation**: [docs.myperch.io](https://docs.myperch.io)
- **API Specs Viewer**: `redoc.html` (all APIs in tabbed interface)
- **Demo Tools**: [Perch Developer Hub](https://perch-developer-hub.webflow.io/embeds/demo)

## Development

### Prerequisites
Install the [Mintlify CLI](https://www.npmjs.com/package/mint) locally in the project:

```bash
npm install
```

This will install all dependencies, including the Mintlify CLI.

### Local Development
Run the development server from the project root:

```bash
npx mint dev
```

View your local preview at `http://localhost:3000`

### Alternative API Viewer
For a consolidated view of all API specifications, open `redoc.html` in your browser. This provides a tabbed interface for all five Perch APIs using Redoc.

## Project Structure

```
perch-docs/
├── getting-started/          # API fundamentals and authentication
├── core-concepts/           # Leads, plans, and key concepts  
├── api-reference/          # Auto-generated API references
├── embeds/                # Embeddable tools documentation
├── snippets/              # Reusable code examples
├── docs.json             # Navigation and configuration
└── redoc.html           # Standalone API specs viewer
```

## API Specifications

All API specs are hosted on S3 and automatically update:

- `https://perch-api-docs.s3.ca-central-1.amazonaws.com/partner.spec.json`
- `https://perch-api-docs.s3.ca-central-1.amazonaws.com/realtor.spec.json`  
- `https://perch-api-docs.s3.ca-central-1.amazonaws.com/advisor.spec.json`
- `https://perch-api-docs.s3.ca-central-1.amazonaws.com/support.spec.json`
- `https://perch-api-docs.s3.ca-central-1.amazonaws.com/tools.spec.json`

## Publishing

Changes are automatically deployed to production when pushed to the main branch via Mintlify's GitHub integration.

## Support

- **Developer Support**: [partnersupport@myperch.io](mailto:partnersupport@myperch.io)
- **Mintlify Issues**: Check CLI version with `mint update`
- **Documentation Issues**: Ensure `docs.json` is valid and in project root

