# Stack Craft Templates

This repository contains templates for various backend frameworks and Prisma integration. These templates are designed to help you quickly set up a new project with your preferred framework and configuration.

## Available Templates

### Frameworks

-   **[Express](https://expressjs.com/)**
-   **[Fastify](https://fastify.dev/)**
-   **[Hapi](https://hapi.dev/)**
-   **[Hono](https://hono.dev/)**
-   **[Koa](https://koajs.com/)**

### Additional Tools

-   **[Prisma](https://www.prisma.io/)**

## Usage

To use these templates, follow the instructions provided by your CLI tool ([create-stack-craft](https://github.com/dev-rio/create-stack-craft)) to select and download the appropriate template for your project.

### Example Structure

Each template follows a similar directory structure, supporting both JavaScript and TypeScript. Below is an example of how the templates are organized:

```
templates/
├── express/
│   ├── javascript/
│   │   ├── src/
│   │   │   ├── index.js
│   │   │   └── ... (other files)
│   │   └── package.json
│   ├── typescript/
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── ... (other files)
│   │   ├── package.json
│   │   └── tsconfig.json
├── fastify/
│   ├── javascript/
│   │   ├── src/
│   │   │   ├── index.js
│   │   │   └── ... (other files)
│   │   └── package.json
│   ├── typescript/
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── ... (other files)
│   │   ├── package.json
│   │   └── tsconfig.json
├── hapi/
│   ├── javascript/
│   │   ├── src/
│   │   │   ├── index.js
│   │   │   └── ... (other files)
│   │   └── package.json
│   ├── typescript/
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── ... (other files)
│   │   ├── package.json
│   │   └── tsconfig.json
├── hono/
│   ├── javascript/
│   │   ├── src/
│   │   │   ├── index.js
│   │   │   └── ... (other files)
│   │   └── package.json
│   ├── typescript/
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── ... (other files)
│   │   ├── package.json
│   │   └── tsconfig.json
├── koa/
│   ├── javascript/
│   │   ├── src/
│   │   │   ├── index.js
│   │   │   └── ... (other files)
│   │   └── package.json
│   ├── typescript/
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── ... (other files)
│   │   ├── package.json
│   │   └── tsconfig.json
├── prisma/
│   ├── schema.prisma
│   ├── .env
│   └── .env.example
└── README.md
```

## Adding a New Template

If you wish to add a new template, follow these steps:

1. Create a new directory under the `templates` directory with the name of the framework/tool.
2. Add subdirectories for `javascript` and `typescript` with the necessary files and configurations.
3. Update this README file to include the new template in the list above.

## Contributing

We welcome contributions! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
