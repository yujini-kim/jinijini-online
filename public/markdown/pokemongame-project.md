[포켓몬 도감채우기 게임]

1. 프로젝트 소개
   이 프로젝트는 사용자가 간단한 게임을 통해 코인을 획득하고, 모은 코인으로 포켓몬 뽑기를 진행하여 다양한 등급의 포켓몬 카드를 수집하는 웹 애플리케이션입니다.

2. 사용 기술 및 선택 이유
   Next.js: Next.js는 React 기반 프레임워크로서, React의 방대한 커뮤니티와 풍부한 자료 덕분에 초보자인 제가 발생하는 에러 해결과 문제 극복에 큰 도움을 받을 수 있었기 때문입니다. Next.js는 파일 기반 라우팅, SSR/SSG, 이미지 최적화 등의 기능을 기본 제공하여 개발 및 배포가 쉽고, Vercel과의 연동이 간편해 코드 푸시만으로 자동 배포가 가능한 점도 매력적이었습니다.

1) Tailwind CSS: 빠르고 쉽게 스타일링을 구현할 수 있을 뿐 아니라, 반응형 디자인을 손쉽게 적용할 수 있어 원하는 디자인을 신속하게 구성할 수 있었습니다.

2) React Query: 이 프로젝트에서는 React Query를 활용해 PokeAPI에서 포켓몬 목록을 불러올 때 내부 캐싱을 적용하여 동일한 데이터를 반복 요청하지 않도록 관리합니다. 또한, 로딩 및 에러 상태를 자동으로 처리하며, 데이터가 로드되지 않았을 경우 Skeleton 컴포넌트를 렌더링하여 사용자 경험을 개선합니다. 마지막으로, useQuery 훅을 사용해 API 호출 로직을 간결하게 구현함으로써 전체 코드의 복잡도를 크게 줄였습니다.

3) Firebase: Firebase는 별도의 백엔드 서버 없이 인증, 데이터 저장, 실시간 데이터베이스 등 다양한 기능을 통합적으로 제공하여, 빠르게 웹 애플리케이션을 구축할 수 있도록 도와주었습니다. 특히, Firebase Authentication을 통해 회원가입과 로그인을 구현하고, Firestore를 활용해 데이터를 손쉽게 관리할 수 있었습니다.

3. 문제점 및 에러 해결 방법

1) 환경 변수 설정 문제:
   문제: 클라이언트 사이드에서 Firebase 설정을 사용할 때 환경 변수 접두어가 누락되어 "Missing App configuration value: 'projectId'"와 같은 오류가 발생했습니다.
   해결 방법: .env.local 파일에 Firebase 관련 환경 변수에 NEXT*PUBLIC* 접두어를 추가하여 문제를 해결했습니다. 예를 들어, NEXT_PUBLIC_LOGIN_PROJECT_ID와 같이 설정하여 클라이언트에서도 해당 값이 올바르게 노출되도록 하였습니다.

2) Firebase와 Next.js 연동 문제:
   문제: Firebase와 Next.js를 연동하는 과정에서 인증 상태 체크 및 ProtectedRoute 구현 등에서 여러 에러가 발생했습니다.
   해결 방법: Firebase의 onAuthStateChanged를 사용해 인증 상태를 실시간으로 확인하고, ProtectedRoute 컴포넌트를 별도로 만들어 레이아웃에 적용하여 인증되지 않은 사용자는 로그인 페이지로 리디렉션하도록 구현하였습니다.

3) useContext를 통한 전역 상태 관리:
   문제: Navbar에서 전역 코인(coin) 상태를 전달하기 위해 props를 여러 번 전달해여 코드가 복잡해졌습니다.
   해결 방법: React의 useContext 훅을 도입하여 불필요한 props 전달 없이 전역 상태를 쉽게 관리할 수 있게 되었습니다.

4) React Query 사용 시 데이터 페칭 문제:
   문제: API 데이터 페칭과 로딩 상태 관리에서 에러 핸들링이 복잡해졌습니다.
   해결 방법: React Query를 도입하여 API 호출, 에러 처리, 로딩 상태 관리를 간결하게 처리함으로써 코드의 복잡성을 줄였습니다.

5) Skeleton 컴포넌트를 이용한 로딩 UI:
   문제: 데이터 로딩 시 사용자가 빈 화면을 보게 되는 문제를 개선하고자 했습니다.
   해결 방법: 로딩 상태에서 Skeleton 컴포넌트를 표시하여 사용자 경험을 개선했습니다.

6) 애니메이션 전환 문제:
   문제: 로그인/회원가입 폼 전환 애니메이션에서 폼이 제대로 나타나지 않거나 없어지는 문제가 발생했습니다.
   해결 방법: 각 폼을 absolute로 배치하고, translate-y 클래스와 transition을 적용하여 부드러운 전환 효과를 구현하였습니다.

7) Firebase 초기화 및 인증 상태 관리:
   문제: Firebase 인증 초기화 시, authStateReady 같은 메서드가 올바르게 작동하지 않거나, 인증 상태를 제대로 확인하지 못하는 문제가 있었습니다.
   해결 방법: Firebase의 onAuthStateChanged를 활용하여 인증 상태를 실시간으로 관리하고, 필요한 경우 ProtectedRoute 컴포넌트를 통해 인증 보호를 구현했습니다.

8) 전체 프로젝트 구조 및 배포 관리:
   문제: Next.js와 Vercel 연동 과정에서 환경 변수 관리, 자동 배포, 파일 기반 라우팅 등 여러 설정 문제에 직면했습니다.
   해결 방법: Vercel의 대시보드와 Next.js의 환경 변수 설정(.env, jsconfig.json)을 활용하여 안정적으로 배포할 수 있도록 구성하였으며, GitHub 연동으로 코드 푸시 한 번으로 자동 배포되도록 설정하였습니다.

4. 프로젝트 파일 링크 : "https://jinijini-online.vercel.app/"

# 구현기능

# **PokeAPI 데이터 처리**

PokeAPI는 기본적으로 영어 데이터를 제공하므로, 한국어 데이터를 변환하는 과정이 필요했습니다.

### **1. 포켓몬 한국어 이름 변환**

- `https://pokeapi.co/api/v2/pokemon-species/{id}` 엔드포인트를 활용하여 포켓몬의 한국어 이름을 가져왔습니다.
- `speciesData.names` 배열에서 `language.name`이 `"ko"`인 항목을 찾아 한국어 이름을 할당했습니다.

```jsx
jsx;

const speciesResponse = await fetch(
  `https://pokeapi.co/api/v2/pokemon-species/${details.id}`,
);
const speciesData = await speciesResponse.json();
const koreanNameObj = speciesData.names.find(
  (name) => name.language.name === "ko",
);
const koreanName = koreanNameObj ? koreanNameObj.name : pokemon.name;
```

### **2. 포켓몬 한국어 타입 변환**

- 포켓몬의 타입 정보를 `details.types`에서 가져왔습니다.
- 각 타입의 상세 정보를 `type.type.url`을 통해 추가 요청하여 가져왔습니다.
- 해당 데이터에서 `names` 배열을 조회하여 `language.name`이 `"ko"`인 값을 찾아 한국어 타입명을 저장했습니다.
- 여러 개의 타입 정보를 동시에 요청하고 응답을 기다려야 하므로, `Promise.all`을 사용하여 병렬로 처리하여 성능을 최적화했습니다.

```jsx
jsx;
const types = await Promise.all(
  details.types.map(async (type) => {
    const typeResponse = await fetch(type.type.url);
    const typeData = await typeResponse.json();
    const koreanTypeName = typeData.names.find(
      (name) => name.language.name === "ko",
    )?.name;
    return koreanTypeName || type.type.name;
  }),
);
```

## **로딩 최적화 및 사용자 경험 개선**

### **1. Skeleton 컴포넌트 사용**

- 포켓몬 카드 데이터 로딩 시 빈 화면 대신 사용자에게 로딩 상태를 시각적으로 보여주기 위해 **Skeleton UI**를 적용했습니다.
- 이를 통해 데이터가 로딩될 때에도 사용자 경험이 원활하게 유지됩니다.

![스켈레톤.png](attachment:bf804134-c5e3-4eca-aae7-eef380660830:스켈레톤.png)

### **2. `React.lazy()`를 활용한 지연 로딩**

```jsx
jsx;
const LazyPokeCard = React.lazy(() => import("@/components/PokeCard"));
```

- `React.lazy()`를 사용해 `PokeCard` 컴포넌트를 **지연 로딩**하여 **초기 페이지 로딩 속도를 향상**시켰습니다.
- 초기 페이지 렌더링 시 `PokeCard` 코드가 번들에 포함되지 않아 **불필요한 리소스 로딩을 줄일 수 있습니다.**

### **3. `Suspense`를 활용한 로딩 처리**

```jsx
jsx
<div className="grid grid-cols-3 gap-2 p-2 tablet:grid-cols-4 desktop:grid-cols-7 desktop:gap-4 desktop:mx-44">
  {isLoading
    ? [...Array(18)].map((_, index) => <PokeCardSkeleton key={index} />)
    : filteredPokemon.map((pokemon) => (
        <Suspense fallback={<PokeCardSkeleton />} key={pokemon.number}>
          <LazyPokeCardname={pokemon.name}
            number={pokemon.number}
            img={pokemon.image}
            type1={pokemon.type1}
            type2={pokemon.type2}
            onClick={() => handleCardClick(pokemon)}
          />
        </Suspense>
      ))}
</div>
```

- `Suspense`를 사용하여 **`PokeCard`가 로드될 때까지 `PokeCardSkeleton`을 표시**합니다.
- 개별 `PokeCard`가 로딩될 때마다 `Suspense`를 감싸서 **포켓몬 카드별 로딩 상태를 독립적으로 처리**할 수 있도록 구현했습니다.

## **전역 상태 관리 (`useContext`)**

```jsx
js;
export const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coin, setCoin] = useState(0);
  const [user, setUser] = useState(null);

  return (
    <CoinContext.Provider value={{ coin, setCoin, user, setUser }}>
      {children}
    </CoinContext.Provider>
  );
}
```

- **코인 상태 및 사용자 정보 관리를 전역 상태로 관리하기 위해 `useContext`를 활용**했습니다.
- 이를 통해 여러 컴포넌트에서 **`coin`상태를 쉽게 공유**할 수 있습니다.

## **Firebase를 활용한 회원가입 및 로그인 기능 구현**

### **1. 회원가입 기능 (`createUserWithEmailAndPassword`)**

```jsx
jsx;
const signUpSubmit = async (e) => {
  e.preventDefault();
  if (name === "" || email === "" || password === "") return;

  try {
    setIsLoading(true);
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(credentials.user, { displayName: name });
    router.push("/");
  } catch (e) {
    if (e instanceof FirebaseError) {
      setError(e.message);
    }
  } finally {
    setIsLoading(false);
  }
};
```

- Firebase Authentication을 이용해 **이메일 및 비밀번호 기반 회원가입 기능을 구현**했습니다.
- `updateProfile`을 통해 **회원가입 시 사용자 이름을 등록할 수 있도록 처리**했습니다.
- **회원가입 완료 후 자동으로 홈페이지(`/`)로 이동**하도록 구현했습니다.

### **2. 로그인 기능 (`signInWithEmailAndPassword`)**

```jsx
jsx;
const signInSubmit = async (e) => {
  e.preventDefault();
  setError("");
  if (isLoading || email === "" || password === "") return;

  try {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/"); // 로그인 완료 후 홈페이지로 이동
  } catch (e) {
    if (e instanceof FirebaseError) {
      setError(e.message);
    }
  } finally {
    setIsLoading(false);
  }
};
```

- Firebase Authentication을 활용하여 **이메일 및 비밀번호 로그인 기능을 구현**했습니다.
- 로그인 성공 시 `router.push("/")`를 통해 **홈페이지로 자동 이동**하도록 설정했습니다.
- 비밀번호 오류 또는 계정이 없을 경우, `FirebaseError`를 통해 **오류 메시지를 처리**할 수 있도록 했습니다.
