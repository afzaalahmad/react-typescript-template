import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@200;300;400;500;600;700;800&display=swap');
  
  
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-family: 'Sarabun', sans-serif;
  }
  ul {
    margin: 0px;
    padding: 0px;
  }
  ul li {
    list-style: none;
  }
  a, button {
    cursor: pointer;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
  }
  a:hover {
    text-decoration: none;
  }
  .btn:hover,
  .btn:focus,
  .btn:active,
  button:hover,
  button:focus,
  button:active {
    outline: none;
    box-shadow: none;
  }
  img {
    max-width: 100%;
  }
  .img--cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .off--canvas {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 100vh;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
  }
  .off--canvas .off--canvas-container {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
  }
  .container,
  .container-fluid {
    padding-left: 20px;
    padding-right: 20px;
  }
  .app--container {
    max-width: 1300px;
  }
  .row--space-10 { /* Update prev style from 66 to 74 */
    margin-left: -10px;
    margin-right: -10px;
  }
  .row--space-10>.col,
  .row--space-10>.col-12 {
    padding-left: 10px;
    padding-right: 10px;
  } /* Update prev style from 66 to 74 */
  .mt-10 {
    margin-top: 10px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mt-30 {
    margin-top: 30px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .pt-10 {
    padding-top: 10px;
  }
  .pb-10 {
    padding-bottom: 10px;
  }
  .pt-20 {
    padding-top: 20px;
  }
  .pb-20 {
    padding-bottom: 20px;
  }
  .pt-30 {
    padding-top: 30px;
  }
  .pb-30 {
    padding-bottom: 30px;
  }
  .pt-40 {
    padding-top: 40px;
  }
  .pb-40 {
    padding-bottom: 40px;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .container--lg {
    width: 100%;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
  }
  .container--sm {
    width: 100%;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }
  .container--xs {
    width: 100%;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
  .animation-fadeIn {
    animation-name: fadeIn;
    -webkit-animation-name: fadeIn;
    animation-duration: 1.0s;
    -webkit-animation-duration: 1.0s;
    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
    visibility: visible !important;
  }
  @keyframes fadeIn {
    0% {
        transform: scale(0.8);
        opacity: 0.0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
  }
  @-webkit-keyframes fadeIn {
    0% {
        -webkit-transform: scale(0.8);
        opacity: 0.0;
    }
    100% {
        -webkit-transform: scale(1);
        opacity: 1;
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    Form Style
  */
  
  
  
  
  
  
  .form--page {
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding: 40px 0;
    background-color: #E5E5E5;
  }
  .form--page .container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .form--page .form--canvas {
    width: 100%;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
  }
  .form__logo-canvas {
    position: relative;
    margin-bottom: 50px;
  }
  .form__logo-canvas .back__btn {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
  .back__btn {
    display: inline-flex;
    align-items: center;
  }
  .back__btn .back__btn-icon {
    font-size: 14px;
    color: #22272C;
    margin-right: 8px;
  }
  .back__btn .back__btn-text {
    font-size: 14px;
    color: #22272C;
    font-weight: 700;
    display: inline-flex;
  }
  .form__heading {
    font-size: 32px;
    color: #22272C;
    font-weight: 800;
    margin-bottom: 44px;
  }
  .form--block {
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(34, 39, 44, 0.1);
    border-radius: 14px;
    padding: 60px 48px 48px 48px;
  }
  
  .form--Btn-canvas {
    max-width: 328px;
    margin-left: auto;
    margin-right: auto;
  }
  .form__link {
    font-size: 12px;
    color: #22272C;
    font-weight: 800;
  }
  .form__link:hover,
  .form__link:focus {
    color: #22272C;
    text-decoration: underline;
  }
  .form--option {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form--option .formOpt__para {
    font-size: 12px;
    color: #282A41;
    font-weight: 500;
  }
  .form--option .form__link {
    text-decoration: underline;
  }
  .form--option .form__link:hover {
    text-decoration: none;
  }
  .para__md {
    font-size: 16px;
    color: #4D555C;
    font-weight: 500;
  }
  .forgotPass__msg {
    font-size: 18px;
    color: #4D555C;
    font-weight: 700;
  }
  
  
  
  
  
  
  
  
  /*
    Form Style
  */
  
  
  
  
  
  
  
  
  
  
  
  /*
    Account Style
  */
  
  
  
  
  
  
  
  
  .account--page {
    align-items: center;
    justify-content: center;
  }
  .accountCreated__icon {
    font-size: 100px;
    color: #3d77ec;
  }
  @keyframes ldio-a7itsi8m0e-1 {
    0% { top: 36px; height: 128px }
    50% { top: 60px; height: 80px }
    100% { top: 60px; height: 80px }
  }
  @keyframes ldio-a7itsi8m0e-2 {
    0% { top: 41.99999999999999px; height: 116.00000000000001px }
    50% { top: 60px; height: 80px }
    100% { top: 60px; height: 80px }
  }
  @keyframes ldio-a7itsi8m0e-3 {
    0% { top: 48px; height: 104px }
    50% { top: 60px; height: 80px }
    100% { top: 60px; height: 80px }
  }
  .ldio-a7itsi8m0e div {
    position: absolute;
    width: 24px;
  }
  .ldio-a7itsi8m0e div:nth-child(1) {
    left: 0px;
    background: #3D77EC;
    animation: ldio-a7itsi8m0e-1 1s cubic-bezier(0,0.5,0.5,1) infinite;
    animation-delay: -0.2s
  }
  .ldio-a7itsi8m0e div:nth-child(2) {
    left: 50px;
    background: #3D77EC;
    animation: ldio-a7itsi8m0e-2 1s cubic-bezier(0,0.5,0.5,1) infinite;
    animation-delay: -0.1s
  }
  .ldio-a7itsi8m0e div:nth-child(3) {
    left: 100px;
    background: #3D77EC;
    animation: ldio-a7itsi8m0e-3 1s cubic-bezier(0,0.5,0.5,1) infinite;
    animation-delay: undefineds
  }
  .loadingio-spinner-pulse-kwgxl1zbejk {
    width: 130px;
    height: 126px;
    display: inline-block;
    overflow: hidden;
  }
  .ldio-a7itsi8m0e {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .alert--custom {
    border-radius: 10px;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    Account Style
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    Not Found Style
  */
  
  
  
  
  
  
  .notFound--page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  .notFound--page .form__heading {
    font-size: 24px;
  }
  
  
  
  
  
  
  
  
  
  
  /*
    Not Found Style
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    Sidebar Style
  */
  
  
  
  
  
  .sidebar {
    z-index: 55;
    position: relative;
    border-radius: 0px 20px 20px 0px;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    background-color: #1c1f20;
  }
  .sidebar--canvas {
    width: 270px;
    min-width: 270px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
  }
  .sidebar--head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px 20px 38px 20px;
  }
  .sidebar__logo {
    width: 120px;
  }
  .sidebar__logo img {
    height: inherit;
  }
  .sidebar--content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 20px;
  }
  .sidebar--content::-webkit-scrollbar {
    width: 5px;
  }
  .sidebar--content::-webkit-scrollbar-thumb {
    background: rgba(188, 186, 184, 0.47);
    border-radius: 5px;
  }
  .sidebar__list {
    margin-bottom: 24px;
  }
  .sidebar__list li a:not([href]):not([class]),
  .sidebar__list li a {
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    padding: 12px 0;
    display: flex;
    align-items: center;
    min-height: 46px;
    line-height: 24px;
  }
  .sidebar__list li a i {
    font-size: 16px;
    margin-right: 10px;
  }
  .sidebar__list li a:not([href]):not([class]):hover,
  .sidebar__list li a:hover,
  .sidebar__list li a.active {
    color: #1d94bb;
  }
  .sidebar__list li a .sidebar__list-text {
    white-space: nowrap;
  }
  .sidebar__list-alt {
    margin-bottom: 10px;
    margin-top: auto;
  }
  .menu__toggle {
    width: 22px;
    height: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0;
    background-color: transparent;
    border: none;
    margin-left: auto;
  }
  .toggle__span {
    display: inline-block;
    width: 22px;
    height: 2px;
    background-color: #341062;
  }
  .menu__toggle .toggle__span:nth-of-type(1),
  .menu__toggle .toggle__span:nth-of-type(3) {
    width: 14px;
  }
  .sidebar--user-canvas {
    padding: 20px 20px 24px 20px;
  }
  .sidebar--user {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 270px;
    min-height: 56px;
    cursor: pointer;
  }
  .sidebar--user .sidebar--img {
    width: 48px;
    height: 48px;
    min-width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    overflow: hidden;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -khtml-border-radius: 50%;
  }
  .sidebar--user .sidebar--img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .sidebar--user .sidebar--detail {
    width: 100%;
  }
  .sidebar--user .sidebar__name {
    font-size: 16px;
    color: #fff;
    margin-bottom: 0;
    word-break: break-word;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .sidebar--user .sidebar__mention {
    font-size: 14px;
    color: #1d94bb;
    margin-bottom: 0;
    margin-top: 4px;
    word-break: break-word;
    font-weight: normal;
  }
  .sidebar--user .dropdown__item-span {
    color: #fff;
    margin-left: 10px;
    font-size: 14px;
    display: inline-flex;
  }
  .sidebar--popover {
    border-radius: 10px;
    width: 220px;
    border: 1px solid rgba(188, 186, 184, 0.33);
    box-shadow: 0px 4px 15px rgba(165, 165, 165, 0.22);
    left: -20px !important;
    margin-top: -26px !important;
  }
  .sidebar--popover-sm {
    left: -8px !important;
    margin-top: -15px !important;
  }
  .sidebar--popover[x-placement^=right]>.arrow::after,
  .sidebar--popover>.arrow::after {
    border-width: .55rem .7rem .55rem 0;
  }
  .sidebar--popover .arrow {
    top: 8px !important;
  }
  .sidebar--popover .popover-body {
    padding: 15px;
  }
  .options__list li a:not([href]):not([class]),
  .options__list li a {
    color: #6A7074;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 6px 0;
    word-break: break-word;
    white-space: normal;
  }
  .options__list li a .options__list-icon {
    margin-right: 10px;
  }
  .options__list li a:not([href]):not([class]):hover,
  .options__list li a:hover,
  .options__list li a:focus {
    color: #1d94bb;
  }
  
  
  
  
  
  /*
    Sidebar Style
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    Settings Style
  */
  
  
  
  
  .main--content {
    padding-top: 30px;
    padding-bottom: 30px;
    width: 100%;
    min-height: 100vh;
  }
  .main--canvas {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    max-width: 1420px;
    margin-left: auto;
    margin-right: auto;
  }
  .main__heading {
    color: #1c1f20;
    font-size: 34px;
    font-weight: 400;
    word-break: break-word;
  }
  .app__btn {
    font-size: 16px;
    border-radius: 10px;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    min-width: 200px;
    min-height: 48px;
    line-height: 21px;
  }
  .app__btn .app__btn-arrow {
    font-size: 16px;
    margin: 3px 0px 0px 10px;
    display: inline-flex;
  }
  .app__btn-sm {
    min-width: 160px;
  }
  .blue__btn {
    color: #fff;
    background-color: #3D77EC;
    border-color: #3D77EC;
  }
  .blue__btn:not(:disabled):not(.disabled):active:focus,
  .blue__btn:not(:disabled):not(.disabled):active,
  .blue__btn:hover,
  .blue__btn:focus {
    color: #fff;
    background-color: #2566ea;
    border-color: #2566ea;
    box-shadow: none;
    outline: none;
  }
  .outline__btn {
    color: #1C1F20;
    background-color: transparent;
    border-color: #1C1F20;
  }
  .outline__btn:not(:disabled):not(.disabled):active:focus,
  .outline__btn:not(:disabled):not(.disabled):active,
  .outline__btn:hover,
  .outline__btn:focus {
    color: #fff;
    background-color: #1C1F20;
    border-color: #1C1F20;
    box-shadow: none;
    outline: none;
  }
  .outline__btn-white {
    color: #fff;
    background-color: transparent;
    border-color: #fff;
  }
  .outline__btn-white:not(:disabled):not(.disabled):active:focus,
  .outline__btn-white:not(:disabled):not(.disabled):active,
  .outline__btn-white:hover,
  .outline__btn-white:focus {
    color: #1C1F20;
    background-color: #fff;
    border-color: #fff;
    box-shadow: none;
    outline: none;
  }
  .setting--head {
    display: flex;
    align-items: center;
  }
  .setting--head .settingHead__icon {
    font-size: 24px;
    color: #222222;
  }
  .setting--head .settingHead__text {
    font-size: 24px;
    color: #222222;
  }
  .user--img {
    width: 220px;
    height: 220px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-color: #BCBAB8;
    border-radius: 50%;
    -khtml-border-radius: 50%;
  }
  .user--img .user--img-upload {
    cursor: pointer;
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 94px;
    background-color: rgba(34,34,34,0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .user--img .user--img-upload input {
    display: none;
  }
  .user--img .userImg__icon {
    font-size: 20px;
    color: #fff;
  }
  .user--img .userImg__text {
    color: #fff;
    font-size: 16px;
    margin: 8px 0;
  }
  .settings--block {
    margin-bottom: 60px;
    padding-bottom: 60px;
    border-bottom: 1px solid #bcbab8;
  }
  .settings--block-canvas .settings--block:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .forms--group {
    position: relative;
    margin-bottom: 24px;
  }
  .forms--group .form-control {
    font-size: 14px;
    color: #222222;
    font-weight: normal;
    border-radius: 10px;
    border: 1px solid #BCBAB8;
    background-color: transparent;
    padding: 10px 14px;
    height: auto;
    min-height: 48px;
  }
  .forms--group .form-control::-webkit-input-placeholder {
    color: #6A7074;
  }
  .forms--group .form-control:-ms-input-placeholder {
    color: #6A7074;
  }
  .forms--group .form-control::placeholder {
    color: #6A7074;
  }
  .forms--group .form-control:focus {
    border-color: #3D77EC;
    box-shadow: none;
  }
  .forms--group .form-control.error {
    border-color: #E7063C;
  }
  .forms--group .error__msg {
    position: absolute;
    left: 0;
    top: 50px;
    color: #E7063C;
    font-size: 12px;
    margin-bottom: 0;
  }
  .select--group .form-control {
    padding-right: 36px;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
  .search--group .form-control {
    background-color: #F5F5F5;
    border-color: #F5F5F5;
    padding-left: 44px;
  }
  .search--group .searchGr__icon {
    color: #6A7074;
    font-size: 16px;
    position: absolute;
    left: 16px;
    top: 16px;
    pointer-events: none;
  }
  
  
  /*
    Settings Style
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    Dashboard Style
  */
  
  
  
  .bg--gray {
    background-color: #f5f5f5;
  }
  .white--box {
    padding: 24px;
    border-radius: 20px;
    background-color: #fff;
  }
  .dashboardCard--header .dc__header-icon {
    font-size: 30px;
    color: #0099FF;
    margin-right: 12px;
  }
  .dashboardCard--header .dc__header-text {
    font-size: 24px;
    color: #222;
  }
  .app--dropdown .dropdown-toggle {
    font-size: 14px;
    color: #222222;
    font-weight: normal;
    border: 1px solid #BCBAB8;
    height: auto;
    min-height: 48px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 3px 32px 3px 13px;
    background-color: #fff;
    position: relative;
    z-index: 5;
  }
  .app--dropdown .dropdown-toggle .appDrop__sub {
    color: #BCBAB8;
    font-size: 12px;
  }
  .app--dropdown .dropdown-toggle .appDrop__caret {
    font-size: 13px;
    color: #222222;
    position: absolute;
    top: 18px;
    right: 16px;
    line-height: 10px;
    pointer-events: none;
    display: inline-flex;
  }
  .app--dropdown.show>.dropdown-toggle,
  .app--dropdown.show>.dropdown-toggle:focus,
  .app--dropdown .dropdown-toggle:not(:disabled):not(.disabled):active,
  .app--dropdown .dropdown-toggle:focus,
  .app--dropdown .dropdown-toggle:active {
    color: #222222;
    background-color: #fff;
    box-shadow: none;
    border-color: #0638E7;
  }
  .no-caret .dropdown-toggle::after {
    content: none;
  }
  .app--dropdown .dropdown-menu {
    right: 0px !important;
    padding: 30px 12px 10px 12px;
    margin-top: -12px !important;
    z-index: 4;
    border-radius: 0px 0px 10px 10px;
    border-color: #0638E7;
    max-height: 260px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .app--dropdown .dropdown-item {
    font-size: 14px;
    color: #6A7074;
    border-radius: 4px;
    border-bottom: 1px solid #BCBAB8;
    padding: 10px 4px;
    word-break: break-word;
    white-space: normal;
  }
  .app--dropdown .dropdown-item:hover,
  .app--dropdown .dropdown-item:focus,
  .app--dropdown .dropdown-item:active {
    background-color: #0638e7;
    color: #fff;
    outline: none;
  }
  .app--dropdown .dropdown-item:last-child {
    border-bottom: none;
  }
  .app--dropdown .dropdown-menu::-webkit-scrollbar {
    width: 4px;
  }
  .app--dropdown .dropdown-menu::-webkit-scrollbar-thumb {
    background: #BCBAB8;
  }
  .dashboard--table-canvas {
    overflow-x: auto;
    padding-left: 2px;
    padding-right: 2px;
  }
  .dashboard--table-canvas::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
  .dashboard--table-canvas::-webkit-scrollbar-thumb {
    background: #C4C4C4;
    border-radius: 5px;
  }
  .dashboard--table {
    min-width: 1080px;
    margin-bottom: 0;
  }
  .dashboard--table thead th {
    background-color: #F5F5F5;
    border-top: 0;
    border-bottom: 3px solid #fff;
    padding: 10px;
    vertical-align: middle;
    text-align: center;
  }
  .dashboard--table thead tr th:first-child {
    border-radius: 5px 0px 0px 5px;
    padding-left: 20px;
  }
  .dashboard--table thead tr th:last-child {
    border-radius: 0px 5px 5px 0px;
  }
  .dashboard--table tbody td {
    padding: 0;
    border: 1px solid #fff;
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
    border-radius: 1px;
    min-width: 114px;
  }
  .dashboard--table tbody tr td:first-child {
    padding-left: 12px;
    text-align: left;
  }
  .dashboard--table-f tbody tr td:first-child {
    min-width: 290px;
    max-width: 290px;
  }
  .dashboard--table tbody tr td:last-child {
    min-width: 44px;
  }
  .dashTable--check {
    display: flex;
    align-items: center;
  }
  .chechbox__custom {
    font-size: 14px;
    color: #6A7074;
    width: 16px;
    height: 16px;
    padding: 0;
    margin-right: 28px;
    display: block;
    position: relative;
    margin-bottom: 0;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }
  .chechbox__custom input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .chechbox__custom .checkmark {
    width: 16px;
    height: 16px;
    border-color: #1C1F20;
    border-radius: 4px;
    display: flex;
    position: static;
    border: 1px solid #BCBAB8;
  }
  .chechbox__custom .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .chechbox__custom .checkmark:after {
    left: 5px;
    top: 2px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .chechbox__custom input:checked ~ .checkmark {
    background-color: #341062;
    border-color: #341062;
  }
  .chechbox__custom input:checked ~ .checkmark:after {
    display: block;
  }
  .dashTable--check .thBox__text,
  .th--box .thBox__text {
    font-size: 14px;
    color: #1C1F20;
    font-weight: normal;
  }
  .th--box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .th--box .thBox__icon {
    font-size: 14px;
    color: #1C1F20;
    display: inline-flex;
    margin-right: 10px;
  }
  .listings--check .thBox__text,
  .th--box .thBox__text {
    font-size: 14px;
    color: #1C1F20;
    font-weight: normal;
  }
  .dashboard--table thead th:first-child .th--box {
    justify-content: flex-start;
  }
  .dashTable--listing {
    display: flex;
    align-items: center;
    padding-right: 4px;
  }
  .dashTable--listing .dashTableListing__img {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 20px;
  }
  .dashTable--listing .dashTableListing__link {
    font-size: 14px;
    color: #6A7074;
    text-decoration: underline;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .dashTable--listing .dashTableListing__link:hover,
  .dashTable--listing .dashTableListing__link:focus {
    text-decoration: none;
  }
  
  
  
  
  
  
  
  /*
    Dashboard Style
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    Search Style
  */
  
  
  
  
  
  
  .search--group-lg .form-control {
    height: calc(3.1112em + .75rem + 2px);
    font-size: 18px;
    line-height: 22px;
    padding: 16px 24px 16px 64px;
  }
  .search--group-lg .searchGr__icon {
    font-size: 24px;
    left: 24px;
    top: 24px;
  }
  .heading__md-dark {
    font-size: 24px;
    color: #1C1F20;
  }
  .heading__md-gray {
    font-size: 24px;
    color: #6a7074;
  }
  .para__sm-dark {
    font-size: 16px;
    color: #1C1F20;
  }
  .para__sm-gray {
    font-size: 16px;
    color: #6a7074;
  }
  
  
  
  
  
  
  
  
  
  
  /*
    Search Style
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    Mobile Nav & Footer Style
  */
  
  
  
  
  
  .mobile--nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    min-height: 50px;
    padding: 9px 20px;
    z-index: 1040;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1c1f20;
  }
  .mobileNav--card .mobileNav--user {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 50%;
  }
  .mobileNav--card .mobileNav--user:hover,
  .mobileNav--card .mobileNav--user:focus {
    box-shadow: none;
  }
  .mobileNav--card .collapse.show,
  .mobileNav--card .collapsing {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
  }
  .mobileNav--card .collapse.show:before,
  .mobileNav--card .collapsing:before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(34, 34, 34, 0.7);
    width: 100%;
    height: 100%;
  }
  .mobileNav--card .collapse:not(.show) {
    display: none;
  }
  .mobileNav--card .card-body {
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: flex-end;
    position: relative;
    z-index: 555;
  }
  .mobileNav--content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 20px 20px 0px 0px;
    padding: 32px 20px 20px 20px;
    width: 100%;
    overflow-y: auto;
    max-height: 92vh;
  }
  .mobileNav--content .mobileNavMenu--head .para__sm-dark {
    font-size: 20px;
  }
  .cross__link-dark {
    font-size: 20px;
    color: #1C1F20;
    padding: 2px;
    border: none;
  }
  .cross__link-dark:hover,
  .cross__link-dark:focus,
  .cross__link-dark:active {
    color: #1C1F20;
    border: none !important;
    outline: none;
    box-shadow: none;
    text-decoration: none;
  }
  .mobileNav--menu {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .mobileNav--menu .mobileNav--item {
    color: #6A7074;
    display: flex;
    align-items: center;
    padding: 14px 0;
    min-height: 48px;
    border-top: 1px solid #F5F5F5;
  }
  .mobileNav--menu .mobileNav--item:first-child {
    border-top: none;
  }
  .mobileNav--menu .mobileNav__icon {
    font-size: 16px;
    display: inline-flex;
    margin-right: 10px;
  }
  .mobileNav--menu .mobileNav__text {
    font-size: 14px;
    line-height: 18px;
    display: inline-flex;
  }
  .mobile--footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px 10px;
    min-height: 60px;
    z-index: 1020;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1c1f20;
  }
  .mobileNav--menu-f {
    flex-direction: row;
    justify-content: space-between;
    overflow-y: initial;
  }
  .mobileNav--menu-f .mobileNav--item {
    color: #fff;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    border: none;
    min-height: 10px;
  }
  .mobileNav--menu-f .mobileNav--item.active {
    color: #1d94bb;
  }
  .mobileNav--menu-f .mobileNav__icon {
    margin: 0px 0px 6px 0px;
  }
  .mobileNav--menu-f .mobileNav__text {
    line-height: 16px;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    Mobile Nav & Footer Style
  */
  
  


  /*
    Media Queries
  */
  
  
  
  @media screen and (min-width: 576px) {
    .main--content {
      padding-top: 40px;
      padding-bottom: 40px;
    }
    .mobile--nav,
    .mobile--footer {
      display: none;
    }
  }
  @media screen and (min-width: 992px) {
    .main--content {
      height: 100vh;
      overflow-y: auto;
    }
    .main--canvas {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
  @media screen and (min-width: 1200px) {
    .main--canvas {
      padding-left: 70px;
      padding-right: 70px;
    }
  }
  @media screen and (min-width: 1440px) {
    .dashboard--table thead tr th:first-child {
      padding-left: 38px;
    }
    .dashboard--table thead tr th:last-child {
      padding-right: 38px;
    }
    .dashboard--table tbody tr td:first-child {
      padding-left: 30px;
      min-width: 310px;
      max-width: 310px;
    }
    .dashboard--table tbody tr td:last-child {
      padding-right: 20px;
    }
  }
  @media screen and (max-width: 991px) {
    .form--page .container {
      max-width: 100%;
    }
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      margin-left: -280px;
      box-shadow: 0 5px 20px rgba(0,102,204,.1);
    }
    .sidebar--show {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 767px) {
    .form__logo-canvas .back__btn {
      left: 20px;
    }
  }
  @media screen and (max-width: 575px) {
    .form--page {
      padding: 10px 0px 0px 0px;
      align-items: initial;
    }
    .form--page .form--canvas {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .form__logo-canvas {
      margin-top: auto;
      margin-bottom: auto;
    }
    .form__logo-canvas .form__logo {
      margin-bottom: 10px;
    }
    .form--block {
      padding: 36px 24px 24px 24px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .forgotPass__msg {
      font-size: 14px;
    }
    .form__heading {
      font-size: 24px;
      margin-bottom: 36px;
    }
    .account--page {
      padding: 0;
    }
    .account--page .container--sm {
      display: flex;
    }
    .account--page .form--block {
      width: 100%;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .white--box {
      padding: 20px;
    }
    .sidebar,
    .sidebar--show {
      display: none;
    }
    .main--app {
      padding-top: 50px;
      padding-bottom: 60px;
    }
  }
  @media screen and (max-width: 375px) {
    .mobileNav--menu-f .mobileNav__icon {
      font-size: 14px;
    }
    .mobileNav--menu-f .mobileNav__text {
      font-size: 12px;
    }
  }
  
  
  
  /*
    Media Queries
  */
  
 


`;

export default GlobalStyle;
