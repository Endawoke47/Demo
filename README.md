# CounselFlow Ultimate - Complete Legal Management System

🚀 **A comprehensive legal management platform with AI-powered capabilities**

## 🌟 Features

### Core Legal Management
- **Matter Management**: Track cases, clients, and legal matters with detailed workflows
- **Contract Lifecycle Management**: Draft, review, negotiate, and manage contracts
- **Entity Management**: Corporate entity tracking and compliance monitoring
- **Document Management**: Secure document storage and organization
- **Task & Calendar Management**: Deadline tracking and workflow automation

### AI-Powered Capabilities
- **Legal AI Chat**: Interactive legal research and consultation
- **Contract Analysis**: Automated contract review and risk assessment
- **Document Generation**: AI-assisted legal document creation
- **Legal Research**: Intelligent case law and statute research
- **Risk Assessment**: Automated risk analysis and compliance checking

### Advanced Features
- **Analytics & Reporting**: Comprehensive legal insights and performance metrics
- **User Management**: Role-based access control and team collaboration
- **API Integration**: RESTful API with Swagger documentation
- **Security**: JWT authentication, encryption, and audit trails

## 🏗️ Architecture

### Backend (NestJS)
- **Framework**: NestJS with TypeScript
- **Database**: SQLite with TypeORM
- **Authentication**: JWT with Passport
- **AI Integration**: OpenAI GPT-4 and DeepSeek
- **API Documentation**: Swagger/OpenAPI

### Frontend (React)
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Components**: Modern, responsive design
- **State Management**: React hooks and context

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Endawoke47/Demo.git
   cd Demo
   ```

2. **Configure Environment Variables**
   ```bash
   # Copy example environment files
   cp .env.example .env
   cp apps/backend/.env.example apps/backend/.env
   
   # Edit the .env files with your configuration
   # Add your OpenAI API key, database credentials, etc.
   ```

3. **Start the Application**
   
   **Backend:**
   ```bash
   cd apps/backend
   node dist/main.js
   ```
   
   **Frontend:**
   ```bash
   cd apps/frontend/dist
   npx http-server -p 5173
   ```

4. **Access the Application**
   - **Frontend**: http://localhost:5173
   - **Backend API**: http://localhost:3001
   - **API Documentation**: http://localhost:3001/api/docs

## 📚 API Documentation

The API includes comprehensive endpoints for:

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `GET /api/v1/auth/profile` - Get user profile

### Matter Management
- `GET /api/v1/matters` - List all matters
- `POST /api/v1/matters` - Create new matter
- `GET /api/v1/matters/:id` - Get matter details
- `PATCH /api/v1/matters/:id` - Update matter

### Contract Management
- `GET /api/v1/contracts` - List all contracts
- `POST /api/v1/contracts` - Create new contract
- `GET /api/v1/contracts/expiring` - Get expiring contracts

### AI Services
- `POST /api/v1/ai/chat` - AI chat interaction
- `POST /api/v1/ai/analyze-contract` - Contract analysis
- `POST /api/v1/ai/generate-document` - Document generation
- `POST /api/v1/ai/research` - Legal research

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
NODE_ENV=development
PORT=3001
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=counselflow
DATABASE_PASSWORD=your_password
DATABASE_NAME=counselflow_ultimate
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
```

### Database Setup

The application uses SQLite by default with automatic migrations. The database will be created automatically when you first run the backend.

### AI Configuration

1. **OpenAI Integration**
   - Sign up at https://openai.com
   - Generate an API key
   - Add to your `.env` file

2. **DeepSeek Integration** (Optional)
   - Alternative AI provider
   - Add DEEPSEEK_API_KEY to enable

## 🛠️ Development

### Project Structure
```
CounselFlow-Ultimate-V4-1/
├── apps/
│   ├── backend/          # NestJS API server
│   │   ├── dist/         # Compiled TypeScript
│   │   └── .env          # Backend configuration
│   └── frontend/         # React application
│       └── dist/         # Built frontend files
├── .env                  # Root configuration
└── README.md
```

### Built With
- **Backend**: NestJS, TypeORM, Passport, Swagger
- **Frontend**: React, TypeScript, Vite
- **Database**: SQLite
- **AI**: OpenAI GPT-4, DeepSeek
- **Security**: JWT, Helmet, CORS

## 🚦 Features in Detail

### Legal Matter Management
- Create and track legal matters
- Client information management
- Case status tracking
- Billing and time tracking
- Document association

### Contract Lifecycle
- Contract drafting and templates
- Review and approval workflows
- Renewal tracking and alerts
- Risk assessment and compliance
- Version control and history

### AI-Powered Legal Assistant
- Natural language legal queries
- Contract clause analysis
- Legal document generation
- Case law research
- Compliance checking

## 🔐 Security Features

- JWT-based authentication
- Role-based access control
- Data encryption at rest
- Secure API endpoints
- Audit trail logging
- CORS protection

## 📈 Analytics & Reporting

- Matter performance metrics
- Contract value tracking
- Time and billing analytics
- Risk assessment reports
- Compliance dashboards

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the API documentation at `/api/docs`
- Review the configuration examples

## 🎯 Roadmap

- [ ] Mobile application
- [ ] Advanced AI features
- [ ] Integration with legal databases
- [ ] Advanced reporting
- [ ] Multi-tenant support
- [ ] Cloud deployment options

---

**CounselFlow Ultimate** - Revolutionizing legal practice management with AI-powered intelligence.