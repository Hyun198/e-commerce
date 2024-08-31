# 쇼핑몰 웹 만들어보기

    H&M 웹 사이트를 참고해 해당 사이트의 제품 정보들을 이용해 api호출, 웹 디자인을 직접 함.

# 기술 스택

    React, HTML, CSS, JavaScript, JsonServer, redux, redux-thunk

# 개선사항

    1. 로그인 페이지 (상태 관리로 해결)
        - useState()를 이용해서 authenticate, true || false 로 구분해 구현
    2. redux middleware로 api호출 및 전역관리
    3. 반응형 웹 디자인

## 기존 redux 코드

    /* function productReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return { ...state, productList: payload.data };
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return { ...state, selectedItem: payload.data };
        default:
            return { ...state };
    }
    }

    export default productReducer; */
