react native 순서


*. mac brew를 설치 </br>
-> brew install node </br>
-> brew install watchman </br>
-> ruby --version </br>

*. cocoapods 설치 </br>
-> sudo gem install cocoapods </br>

*. react-native 설치 </br>

-> npx react-native@latest init reactnativebasic </br>
또는 </br>
-> npx react-native init reactnativebasic </br>

*. 실행 </br>
-> npx react-native run-ios </br>

*.navigation 추가(pods 또한 최신버전으로 유지) </br>
-> npm install @react-navigation/native @react-navigation/native-stack </br>
-> npm install react-native-screens react-native-safe-area-context </br>
-> cd ios </br>
-> pod install </br>
-> cd .. </br>

*. github 연결 </br>
-> git init </br>
-> git status (내용 확인) </br>
-> git add . (모든 파일 업로드) </br>
-> git commit -m "project start" </br>
-> git branch -M main (기본 브랜치 master 에서 main으로 변경) </br>
-> git remote add origin https://github.com/garajilpung/reactnativebasic.git </br>

echo "# reactnativebasic" >> README.md </br>
-> git init </br>
-> git add README.md </br>
-> git commit -m "first commit" </br>
-> git branch -M main </br>
-> git remote add origin https://github.com/garajilpung/reactnativebasic.git </br>
-> git push -u origin main </br>

