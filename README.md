# Mamamonte KR (마마몽떼 프로젝트)

본 프로젝트는 프리미엄 몬테소리 교육 센터인 '마마몽떼'의 센터 관리 및 교육 정보 제공을 위한 웹 애플리케이션 서비스입니다.

##  Montessori Education Core Values
- **존중(Respect)**: 아이의 독립성과 개별적인 발달 속도를 존중합니다.
- **준비된 환경(Prepared Environment)**: 아이가 스스로 탐구하고 배울 수 있는 환경을 제공합니다.
- **자기 주도 학습(Self-directed Learning)**: 교사는 관찰자이자 조력자로서 아이의 성장을 돕습니다.

## Tech Stack
- **Backend**: Java 17, Spring Boot 3.2.x, Spring Data JPA
- **Database**: H2 (Development), MySQL (Production)
- **View**: Thymeleaf (Optional)

## Project Structure (Draft)
- `com.mamamonte.domain`: 핵심 비즈니스 모델 (Center, Program, Student, Schedule)
- `com.mamamonte.api`: REST API 컨트롤러
- `com.mamamonte.service`: 비즈니스 로직 처리

---
*이 문서는 바이브 코딩의 시작을 알리는 가이드라인입니다.*
