# AI Chatbot

이 프로젝트는 Next.js App Router와 TypeScript를 활용하여 구축된 챗봇 시스템입니다.  
챗봇은 `public/markdown` 폴더 내의 Markdown 파일들을 지식 기반으로 활용하여, 사용자 질문에 대해 적절한 답변을 제공합니다.  
또한, 챗봇 UI는 비밀번호 인증을 통해 접근이 제한됩니다.

## 주요 기능

- **챗봇 UI 및 비밀번호 인증**

  - 챗봇 버튼 클릭 시 비밀번호 입력창이 표시됩니다.
  - 올바른 비밀번호 입력 시 챗봇 인터페이스가 열리고, 대화가 시작됩니다.

- **Markdown 기반 지식 확장**

  - `public/markdown` 폴더 내의 Markdown 파일들을 자동으로 읽어, 시스템 프롬프트에 포함시킵니다.
  - 챗봇 UI 내에서 Markdown 파일 목록을 표시하며, 각 파일을 클릭하여 별도 창에서 열람할 수 있습니다.

- **API 엔드포인트**

  - `/api/files`: `public/markdown` 폴더 내의 파일 목록을 반환합니다.
  - `/api/chatbot`: OpenAI의 GPT-3.5-turbo 모델을 사용하여 사용자의 질문에 대해 스트리밍 방식으로 응답합니다.
  - 시스템 프롬프트에는 Markdown 파일의 내용과 챗봇 응답 규칙이 포함되어 있습니다.


# Email 보내기 기능

이 프로젝트는 Next.js 및 Nodemailer를 사용하여 이메일을 보내는 연락처 양식(Contact Form)을 구현한 것입니다.

## 주요 기능

**이메일 전송 기능**

- 사용자가 입력한 정보를 기반으로 이메일을 전송합니다.
- Nodemailer를 이용하여 Gmail을 통해 메일을 보낼 수 있습니다.

**환경 변수 활용**

- .env.local 파일을 통해 이메일 계정 정보 및 수신자 정보를 설정할 수 있습니다.

## API 엔드포인트

- /api/contract/route.js : 사용자의 입력을 받아 Nodemailer를 이용해 이메일을 전송합니다.
- .env.local의 환경 변수를 사용하여 이메일 계정 정보를 보호합니다.
