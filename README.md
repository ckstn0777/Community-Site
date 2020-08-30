# DoorToKorea
DoorToKorea Communcation Site


### 1) 버전관리
1. X.X.X가 있는데 가장앞에 숫자는 가장 큰 변화가 있을때 증가시켜준다. 중간 숫자는 어떤 기능이 추가되거나 없어졌을 경우.
마지막으로 하위숫자는 자잘한 버그나 에러 수정 시 증가시켜준다.
2. 상용화 시에는 버전 1.0.0부터 시작하게된다.

### 2) 설치 -> 자동 도커 빌드
<pre>
cd /home/ckstn/Git
git clone https://github.com/ckstn0777/DoorToKorea
cd DoorToKorea
</pre>

### 3) 빌드된 도커 이미지 pull 후 컨테이너 생성
<pre>
#Login For Private Docker Repository
docker login
docker pull ckstn0777/doortokorea:latest
docker run -p 5005:5005 -v /home/ckstn/images:/usr/src/app/backend/images ckstn0777/doortokorea:latest
</pre>
