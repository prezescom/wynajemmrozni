# Overview

This project is a Polish car rental business application focused on freezer/refrigerated vehicle rentals. It serves as both a static landing page for SEO purposes (wynajemmrozni.pl) and a full-stack React application. The business specializes in renting Toyota ProAce vehicles equipped with freezer compartments capable of temperatures from -20°C to +20°C, targeting the Silesia region and all of Poland.

The application includes a static HTML landing page optimized for search engines and a modern React-based web application with a Node.js/Express backend. The static landing redirects traffic to the main application at iglo-bus.rent.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The project uses a modern React setup with TypeScript and Vite as the build tool. The frontend follows a component-based architecture using:

- **UI Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

The component structure separates UI components (in `/client/src/components/ui/`) from page components, following the shadcn/ui design system patterns. The application uses a mobile-first responsive design approach.

## Backend Architecture

The backend is built with Express.js and follows a modular structure:

- **Runtime**: Node.js with TypeScript using tsx for development
- **Framework**: Express.js with middleware for JSON parsing and CORS handling
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL session store using connect-pg-simple
- **Development Tools**: Vite integration for hot module replacement in development

The server implements a clean separation between routes, storage layer, and business logic. The storage interface allows for easy switching between different implementations (currently using in-memory storage with plans for PostgreSQL).

## Database Design

The application uses PostgreSQL as the primary database with Drizzle ORM for schema management:

- **Schema Location**: `/shared/schema.ts` for shared types between frontend and backend
- **Migrations**: Drizzle Kit handles database migrations in `/migrations/` directory
- **Type Safety**: Full TypeScript integration with Drizzle for compile-time query validation

Current schema includes a users table with basic authentication fields, designed to be extended for the rental business requirements.

## Static Site Integration

A dual-approach serves both SEO and application needs:

- **Static Landing**: Pure HTML/CSS landing page at root domain for optimal SEO performance
- **React App**: Full-featured application served from `/client/` directory
- **Performance**: Static assets are optimized for Lighthouse scores >90 in all categories
- **Redirects**: Strategic traffic direction from the landing page to the main application

## Development Environment

The project is optimized for Replit development with:

- **Hot Reload**: Vite HMR for instant frontend updates
- **Error Handling**: Runtime error overlays and comprehensive error boundaries
- **Development Tools**: Integrated debugging and development banner tools
- **Build Process**: Separate development and production build configurations

# External Dependencies

## Core Framework Dependencies

- **@neondatabase/serverless**: Serverless PostgreSQL client for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations with PostgreSQL dialect
- **express**: Web server framework for the backend API
- **react & react-dom**: Core React framework for the frontend
- **vite**: Build tool and development server

## UI and Styling

- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for responsive design
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **lucide-react**: Icon library for consistent iconography

## Data Management

- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling and validation
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

## Development and Build Tools

- **typescript**: Static type checking
- **tsx**: TypeScript execution for Node.js development
- **esbuild**: Fast JavaScript bundler for production builds
- **wouter**: Lightweight routing library for React

## Database and Storage

- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **drizzle-kit**: CLI tool for database migrations and schema management

The application is designed to work with PostgreSQL databases, with configuration for both local development and production deployment through environment variables.