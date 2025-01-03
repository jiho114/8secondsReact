# 8Seconde

8seconds를 제작하며... 처음에는 컴포넌트를 조각내고 재활용하는 게 낯설고 어려웠던 경험이었지만, 점차 이를 통해 많은 것을 배울 수 있었습니다. 반복적으로 사용하다 보니 각 컴포넌트의 조각이 서로 어떻게 연결되는지 이해하게 되었고, 기존에 HTML, JS를 반복적으로 작성해야 하는 번거로움이 줄어들며 보다 효율적인 코드 작성이 가능해져 좋았습니다.

## Main 페이지를 제작하며

- 주요 기능을 구현하면서 가장 어려운 부분 중 하나는 **useState**를 사용하여 상태 관리를 하고 탭 메뉴를 만들 때였습니다. 사용자가 '여성' 또는 '남성' 버튼을 클릭했을 때, 각각의 선택에 따라 해당 제품 리스트가 표시되게 하고 싶었지만, 초기 상태 설정하는 것이 어려웠습니다. 처음에는 상태 초기값을 비워보았지만, 이 접근은 큰 실수였고, 결국 사이트가 처음 렌더링될 때 아무것도 선택되지 않은 상태로 나타났습니다. 이 과정에서 **useContext**가 떠올랐고, 이를 통해 상태 관리를 더 효과적으로 해결할 수 있다는 것을 깨달았습니다.

- 탭 메뉴의 경우 거의 모든 페이지에 상태가 전달되어야 해서 props로 상태를 전달하는 것이 매우 복잡하고 어려운 형태로 바뀌었으나, 컨텍스트를 활용해 커스텀 훅을 만들어 사용하니 새로운 세상이 펼쳐진 것 같았습니다. 일일이 이름을 정하고 속성을 내려주는 번거로움 없이 훅을 만들어 Provider로 감싸면, 감싸진 태그들은 전역에서 쉽게 상태를 불러올 수 있다는 점이 매우 편리했습니다. useState를 제외한 나머지 훅들은 큰 장벽처럼 느껴졌지만, 탭을 만들면서 컨텍스트를 익히면서 Notice 페이지에서도 유용하게 사용할 수 있게 되었습니다.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
