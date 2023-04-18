react native 순서


*. mac brew를 설치
-> brew install node
-> brew install watchman
-> ruby --version

*. cocoapods 설치
-> sudo gem install cocoapods

*. react-native 설치

-> npx react-native@latest init reactnativebasic
또는
-> npx react-native init reactnativebasic

*. 실행
-> npx react-native run-ios

*.navigation 추가(pods 또한 최신버전으로 유지)
-> npm install @react-navigation/native @react-navigation/native-stack
-> npm install react-native-screens react-native-safe-area-context
-> cd ios
-> pod install
-> cd ..

*. github 연결

-> git init
-> git status (내용 확인)
-> git add . (모든 파일 업로드)
-> git commit -m "project start"
-> git branch -M main (기본 브랜치 master 에서 main으로 변경)
-> git remote add origin https://github.com/garajilpung/reactnativebasic.git

echo "# reactnativebasic" >> README.md
-> git init
-> git add README.md
-> git commit -m "first commit"
-> git branch -M main
-> git remote add origin https://github.com/garajilpung/reactnativebasic.git
-> git push -u origin main

