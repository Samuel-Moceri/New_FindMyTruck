"use strict";
(self["webpackChunkreact_modele"] = self["webpackChunkreact_modele"] || []).push([[179],{

/***/ 1620:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 4 modules
var react_router_dom = __webpack_require__(7378);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(9704);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 6 modules
var react_router = __webpack_require__(9494);
;// CONCATENATED MODULE: ./src/actions/users.js
// Create the case to export it to the middleware
var LOG_USER = 'LOG_USER';
var logUser = function logUser() {
  return {
    type: LOG_USER
  };
};
var CHANGE_VALUE = 'CHANGE_VALUE';
var changeValue = function changeValue(key, value) {
  return {
    type: CHANGE_VALUE,
    key: key,
    value: value
  };
};
var TRY_LOGIN = 'TRY_LOGIN';
var tryLogin = function tryLogin() {
  return {
    type: TRY_LOGIN
  };
};
var LOGIN = 'LOGIN';
var login = function login(token) {
  return {
    type: LOGIN,
    token: token
  };
};
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(6893);
;// CONCATENATED MODULE: ./src/assets/images/logo.png
/* harmony default export */ const logo = (__webpack_require__.p + "images/a40d28d465a883d7eadaaf97c798d3e6.png");
;// CONCATENATED MODULE: ./src/assets/images/FMT_clear.png
/* harmony default export */ const FMT_clear = (__webpack_require__.p + "images/54dad425b2ac56ed5e9e168086147007.png");
;// CONCATENATED MODULE: ./src/assets/images/logo-login.png
/* harmony default export */ const logo_login = (__webpack_require__.p + "images/779337f0b6aeaa64adc0f168f911d0fe.png");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/Header/index.js
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }


 // import ajax from 'src/components/middlewares';










var Header = function Header(_ref) {
  _objectDestructuringEmpty(_ref);

  var registered = (0,es/* useSelector */.v9)(function (state) {
    return state.register.registered;
  });
  var logged = (0,es/* useSelector */.v9)(function (state) {
    return state.user.logged;
  });
  var nickname = (0,es/* useSelector */.v9)(function (state) {
    return state.user.nickname;
  });
  var dispatch = (0,es/* useDispatch */.I0)(); // localStorage.setItem('nickname', JSON.stringify(response.data.data.nickname));
  // const nickname = JSON.parse(localStorage.getItem('nickname'));
  // console.log(nickname);

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: 'LOGOUT'
    });
    sessionStorage.clear();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
    className: "header",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("section", {
      className: "header_left",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
        className: "logo",
        to: "/",
        exact: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "logo_img",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: FMT_clear,
            alt: "Logo FindMyTruck"
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: "header_right",
      children: [!logged && /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
        className: "header_right_connexion",
        to: "/connexion",
        exact: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "header_right_connexion_text",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: "Connexion"
          })
        })
      }), !registered && !logged && /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
        className: "header_right_inscription",
        to: "/inscription",
        exact: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "header_right_inscription_text",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: "Inscription"
          })
        })
      }), logged === true && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "header_right_logged",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "header_right_logged_hello",
            children: ["Bonjour ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "header_right_logged_hello_nickname",
              children: nickname
            }), " !"]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
            className: "header_right_link",
            to: "/profil",
            exact: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
              className: "header_right_link_logged_icon",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiUser */.fzv, {})
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("form", {
          onSubmit: handleSubmit,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "header_logout",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
              type: "submit",
              className: "logout_button",
              value: "Deconnexion"
            })
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
{
  /* <NavLink
   className="menu-link"
   activeClassName="menu-link--active"
   to="/"
   exact
  > */
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(1249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(9070);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(7941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(7327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(5003);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(9554);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(9337);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(3321);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
;// CONCATENATED MODULE: ./src/components/Foodtruck/index.js

 // import { CgPin } from 'react-icons/cg';





var Foodtruck = function Foodtruck(_ref) {
  var slug = _ref.slug;
  var baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';
  var categoryName = category.name;
  var pictureURL = baseURL + "".concat(picture);
  return /*#__PURE__*/_jsxs("section", {
    className: "page_foodtruck",
    children: [/*#__PURE__*/_jsx("img", {
      className: "page_foodtruck_img",
      src: pictureURL // src={thumbnail} 
      // alt={title}  

    }), /*#__PURE__*/_jsxs("div", {
      className: "page_foodtruck_content",
      children: [/*#__PURE__*/_jsx("p", {
        className: "page_foodtruck_content_title",
        children: slug
      }), /*#__PURE__*/_jsx("div", {
        className: "page_foodtruck_content_subtitle",
        children: /*#__PURE__*/_jsx("p", {
          className: "page_foodtruck_content_rating",
          children: categoryName
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "page_foodtruck_content_description"
      })]
    })]
  });
};

/* harmony default export */ const components_Foodtruck = ((/* unused pure expression or super */ null && (Foodtruck)));
// EXTERNAL MODULE: ./node_modules/react-icons/cg/index.esm.js
var cg_index_esm = __webpack_require__(471);
;// CONCATENATED MODULE: ./src/components/Card/index.js









var Card = function Card(_ref) {
  var id = _ref.id,
      name = _ref.name,
      category = _ref.category,
      picture = _ref.picture,
      slug = _ref.slug,
      city = _ref.city,
      postal_code = _ref.postal_code,
      payment = _ref.payment,
      street = _ref.street,
      phone = _ref.phone;
  var baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';
  var categoryName = category.name;
  var pictureURL = baseURL + "".concat(picture);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
      className: "card_foodtruck",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        className: "card_foodtruck_img",
        src: pictureURL // src={thumbnail} 
        ,
        alt: slug
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "card_foodtruck_content",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          className: "card_foodtruck_content_title",
          children: name
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "card_foodtruck_content_subtitle",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: "card_foodtruck_content_category",
            children: categoryName
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            className: "card_foodtruck_content_rating"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "card_foodtruck_content_description",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(cg_index_esm/* CgPin */.tcx, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: street
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: city
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: postal_code
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: payment
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: phone
          })]
        })]
      })]
    })
  });
}; // Card.propTypes = {
//   thumbnail: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   difficulty: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
// };


/* harmony default export */ const components_Card = (Card);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(9753);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(1038);
// EXTERNAL MODULE: ./node_modules/react-map-gl/dist/esm/index.js + 71 modules
var esm = __webpack_require__(2963);
// EXTERNAL MODULE: ./node_modules/react-map-gl-geocoder/dist/index.m.js + 6 modules
var index_m = __webpack_require__(3199);
;// CONCATENATED MODULE: ./src/components/Map/index.js




















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* global document */











var Map = function Map() {
  //Map generator
  var _useState = (0,react.useState)({
    // lat & long : starting position on the map (O'Clock's office)
    latitude: 47.7,
    longitude: -1.65,
    // W&H are define in style.scss (.map), map take 100% of this area
    width: "100%",
    height: "100%",
    // starting zoom level
    zoom: 15
  }),
      _useState2 = _slicedToArray(_useState, 2),
      viewport = _useState2[0],
      setViewport = _useState2[1]; // TODO Comprendre ces 2 const


  var mapRef = (0,react.useRef)();
  var handleViewportChange = (0,react.useCallback)(function (newViewport) {
    return setViewport(newViewport);
  }, []); // Mapbox token to connect with

  var mapboxApiKey = 'pk.eyJ1Ijoid2VpcmRvZm10IiwiYSI6ImNrdWduNXJubTA0Zzgycm96dnV0ejZuOGwifQ.qGNN7kWQ3ot3G8aj1Oa9ew'; // Mapbox style from : https://www.mapbox.com/gallery/

  var mapboxStyle = "mapbox://styles/weirdofmt/cktvjc1ae2bk017okiy41geat"; // Search's results change viewport -> newViewport

  var handleGeocoderViewportChange = (0,react.useCallback)(function (newViewport) {
    // Transfert from origin point to search's result point with custom duration (ms)
    var geocoderDefaultOverrides = {
      transitionDuration: 3000
    };
    return handleViewportChange(_objectSpread(_objectSpread({}, newViewport), geocoderDefaultOverrides));
  }, []); // LA C'EST UN TEST DE STYLE DIRECT DANS LE CODE SUR LE BOUTTON DE GEOLOCALSATION

  var geolocateControlStyle = {
    margin: '4.2rem 0 0 .5rem'
  };
  var navControlStyle = {
    margin: '.5rem'
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "geocode",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(esm/* default */.ZP, _objectSpread(_objectSpread({
        className: "map_area",
        ref: mapRef
      }, viewport), {}, {
        mapboxApiAccessToken: mapboxApiKey,
        mapStyle: mapboxStyle,
        onViewportChange: handleViewportChange,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(esm/* GeolocateControl */.$j, {
          style: geolocateControlStyle,
          className: "geolocate_area",
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true // showUserHeading={true}
          ,
          auto: true // onGeolocate= {GeolocationCoordinates}

        }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* NavigationControl */.Pv, {
          style: navControlStyle
        })]
      }))
    })
  });
};

/* harmony default export */ const components_Map = (Map); // // Initialize the GeolocateControl.
// const geolocate = new mapboxgl.GeolocateControl({
//   positionOptions: {
//   enableHighAccuracy: true
//   },
//   trackUserLocation: true
//   });
//   // Add the control to the map.
//   map.addControl(geolocate);
//   // Set an event listener that fires
//   // when a geolocate event occurs.
//   geolocate.on('geolocate', () => {
//   console.log('A geolocate event has occurred.');
//   });
;// CONCATENATED MODULE: ./src/components/Card/fake_card.js
function fake_card_objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }


 // import { CgPin } from 'react-icons/cg';






var Fake_Card = function Fake_Card(_ref) {
  fake_card_objectDestructuringEmpty(_ref);

  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("section", {
      className: "card_foodtruck",
      children: [/*#__PURE__*/_jsx("img", {
        className: "card_foodtruck_img"
      }), /*#__PURE__*/_jsxs("div", {
        className: "card_foodtruck_content",
        children: [/*#__PURE__*/_jsx("p", {
          className: "card_foodtruck_content_title",
          children: "NOM DU FOODTRUCK"
        }), /*#__PURE__*/_jsxs("div", {
          className: "card_foodtruck_content_subtitle",
          children: [/*#__PURE__*/_jsx("p", {
            className: "card_foodtruck_content_category",
            children: "cat\xE9gorie"
          }), /*#__PURE__*/_jsx("p", {
            className: "card_foodtruck_content_rating"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "card_foodtruck_content_description",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "card_foodtruck_content_description_adress",
            children: [/*#__PURE__*/_jsx("p", {
              className: "card_foodtruck_content_description_adress_street",
              children: "Rue"
            }), /*#__PURE__*/_jsx("p", {
              className: "card_foodtruck_content_description_adress_postalcode",
              children: "Code Postal"
            }), /*#__PURE__*/_jsx("p", {
              className: "card_foodtruck_content_description_adress_city",
              children: "Ville"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "card_foodtruck_content_description_details",
            children: [/*#__PURE__*/_jsx("p", {
              children: "Mode de paiement"
            }), /*#__PURE__*/_jsx("p", {
              children: "T\xE9l\xE9phone"
            })]
          })]
        })]
      })]
    })
  });
}; // Card.propTypes = {
//   thumbnail: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   difficulty: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
// };


/* harmony default export */ const fake_card = ((/* unused pure expression or super */ null && (Fake_Card)));
;// CONCATENATED MODULE: ./src/components/Result/index.js
function Result_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Result_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Result_ownKeys(Object(source), true).forEach(function (key) { Result_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Result_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Result_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















 // import {CgPin} from 'react-icons/cg';






var Result = function Result() {
  var foodtrucks = (0,es/* useSelector */.v9)(function (state) {
    return state.foodtruck.list;
  });
  console.log(foodtrucks);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      className: "result_title",
      children: "R\xE9sultats de votre recherche"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "result",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "result_map",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Map, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "result_cards",
        children: foodtrucks.map(function (foodtruck) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Card, Result_objectSpread({}, foodtruck), foodtruck.id);
        })
      })]
    })]
  });
};

/* harmony default export */ const components_Result = (Result);
// EXTERNAL MODULE: ./node_modules/typewriter-effect/dist/react.js
var dist_react = __webpack_require__(5459);
var dist_react_default = /*#__PURE__*/__webpack_require__.n(dist_react);
;// CONCATENATED MODULE: ./src/components/Typewriter/typewriter_search.js




var TypeWriter_search = function TypeWriter_search() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)((dist_react_default()), {
    options: {
      autoStart: true,
      loop: true,
      delay: 65
    },
    onInit: function onInit(typewriter) {
      typewriter.typeString('Chercher un foodtruck à ...').pauseFor(300).deleteChars(3).pauseFor(500);
      typewriter.typeString('Paris').pauseFor(1000).deleteChars(5).pauseFor(500);
      typewriter.typeString('Mouais').pauseFor(1000).deleteChars(6).pauseFor(500);
      typewriter.typeString('Bibiche').pauseFor(1000).deleteChars(7).pauseFor(500);
      typewriter.typeString('Angoisse').pauseFor(1000).deleteChars(8).pauseFor(500);
      typewriter.typeString('Poil').pauseFor(1000).deleteChars(4).pauseFor(500);
      typewriter.typeString('Plaisir').pauseFor(1000).deleteChars(7).pauseFor(500);
      typewriter.typeString('Les Croûtes').pauseFor(1000).deleteChars(11).pauseFor(500);
      typewriter.typeString('Les Boulays').pauseFor(1000).deleteChars(11).pauseFor(500);
      typewriter.typeString('Moisy').pauseFor(1000).deleteChars(5).pauseFor(500);
      typewriter.typeString('Plurien').pauseFor(1000).deleteChars(7).pauseFor(500);
      typewriter.typeString('Bizou').pauseFor(1000).deleteChars(5).pauseFor(500).start();
    }
  });
};

/* harmony default export */ const typewriter_search = (TypeWriter_search);
;// CONCATENATED MODULE: ./src/components/SearchBar/index.js


 // import Result from 'src/components/Result';









var SearchBar = function SearchBar() {
  var address = (0,es/* useSelector */.v9)(function (state) {
    return state.user.address;
  });
  var addressvalue = (0,es/* useSelector */.v9)(function (state) {
    return state.user.address.value;
  }); // const search = useSelector(state =>state.foodtruck.search);

  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating...');
      navigator.geolocation.getCurrentPosition(function (position) {
        dispatch({
          type: 'SAVE_LAT_LNG',
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        dispatch({
          type: 'FETCH_FOODTRUCK_ON_LOAD'
        });
      }, function () {
        console.log('Unable to retrieve your location');
      });
    }
  }, []);

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: 'FETCH_FOODTRUCK'
    });
  };

  var handleChange = function handleChange(event) {
    dispatch({
      type: 'CHANGE_VALUE',
      key: 'address',
      value: event.target.value
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "searchBar",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
        className: "searchBar_form",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "searchBar_text",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
            type: "text",
            onChange: handleChange,
            value: address,
            required: "required"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiTruck */.C4B, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(typewriter_search, {})]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
          to: "/resultat",
          exact: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
          className: "searchBar_button",
          value: "GO",
          type: "submit"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Result, {})]
  });
};

/* harmony default export */ const components_SearchBar = (SearchBar);
;// CONCATENATED MODULE: ./src/components/Home/index.js









var Home = function Home() {
  // window.onunload = function () {
  //   sessionStorage.clear();
  // }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "home",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_SearchBar, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "test"
    })]
  });
};

/* harmony default export */ const components_Home = (Home);
;// CONCATENATED MODULE: ./src/components/Footer/index.js


/**
 * Composant to make our 'footer' with different 'li' and links
 */




var Footer = function Footer() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("footer", {
    className: "footer",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      className: "footer_list",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
        to: "/contact",
        exact: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "footer_list_el",
          children: "Contact "
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
        to: "/equipe",
        exact: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "footer_list_el",
          children: "Find My Truck - Artisan d\xE9nicheur depuis 2021"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
        to: "/mentions_legales",
        exact: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "footer_list_el",
          children: "Mentions l\xE9gales"
        })
      })]
    })
  });
};

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/Forms/Field/index.js

// == Import : npm

 // == Composant




var Field = function Field(_ref) {
  var value = _ref.value,
      type = _ref.type,
      name = _ref.name,
      placeholder = _ref.placeholder,
      onFieldChange = _ref.onFieldChange;

  var handleChange = function handleChange(evt) {
    onFieldChange(name, evt.target.value);
  };

  var inputId = "field-".concat(name);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: value.length > 0 ? 'field field--has-content' : 'field',
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
      // React - state
      value: value,
      onChange: handleChange // infos de base
      ,
      id: inputId,
      type: type,
      className: "field-input",
      placeholder: placeholder,
      name: name
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
      htmlFor: inputId,
      className: "field-label",
      children: placeholder
    })]
  });
};

Field.propTypes = {
  value: (prop_types_default()).string,
  type: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired,
  placeholder: (prop_types_default()).string.isRequired,
  onFieldChange: (prop_types_default()).func.isRequired
}; // Valeurs par défaut pour les props

Field.defaultProps = {
  value: '',
  type: 'text'
}; // == Export

/* harmony default export */ const Forms_Field = (Field);
;// CONCATENATED MODULE: ./src/components/LoginForm/index.js









var LoginForm = function LoginForm() {
  /**
   * We get the state values in several const
   */
  var email = (0,es/* useSelector */.v9)(function (state) {
    return state.user.email;
  });
  var password = (0,es/* useSelector */.v9)(function (state) {
    return state.user.password;
  });
  var logged = (0,es/* useSelector */.v9)(function (state) {
    return state.user.logged;
  });
  var registered = (0,es/* useSelector */.v9)(function (state) {
    return state.register.registered;
  });

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: 'TRY_LOGIN'
    });
  };
  /**
   * We get the desired values to dispatch them where we need 
   */


  var dispatch = (0,es/* useDispatch */.I0)();

  var onFieldChange = function onFieldChange(key, value) {
    dispatch(changeValue(key, value));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [logged && /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: "/"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit,
      className: "login_form",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "login_form_title",
        children: "Connexion"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
        form: "login",
        name: "email",
        value: email,
        type: "email",
        placeholder: "E-mail",
        onFieldChange: onFieldChange,
        required: "required"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
        form: "login",
        name: "password",
        value: password,
        type: "password",
        placeholder: "Mot de passe",
        onFieldChange: onFieldChange,
        required: "required"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "login_form_forget",
        children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "",
          children: "Mot de passe oubli\xE9 ?"
        }), " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        type: "submit",
        className: "login_form_button",
        children: "Se connecter"
      }), !registered && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "login_form_joinus",
          children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "/inscription",
            children: "Rejoins-nous !"
          }), " "]
        })
      })]
    })]
  });
};

/* harmony default export */ const components_LoginForm = (LoginForm);
;// CONCATENATED MODULE: ./src/actions/register.js
var REGISTER = 'REGISTER';
var register = function register() {
  return {
    type: REGISTER
  };
};
var CHANGE_VALUE_REGISTER = 'CHANGE_VALUE_REGISTER';
var changeValueRegister = function changeValueRegister(key, value) {
  return {
    type: CHANGE_VALUE_REGISTER,
    key: key,
    value: value
  };
};
;// CONCATENATED MODULE: ./src/components/Register/index.js










var RegisterForm = function RegisterForm() {
  /**
   * We get the state values in several const
   */
  var registered = (0,es/* useSelector */.v9)(function (state) {
    return state.register.registered;
  });
  var nameRegister = (0,es/* useSelector */.v9)(function (state) {
    return state.register.nameRegister;
  });
  var emailRegister = (0,es/* useSelector */.v9)(function (state) {
    return state.register.emailRegister;
  });
  var passwordRegister = (0,es/* useSelector */.v9)(function (state) {
    return state.register.passwordRegister;
  }); // const checked = useSelector(state => state.register.checked);

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: 'REGISTER'
    });
  };
  /**
   * We get the desired values to dispatch them where we need 
   */


  var dispatch = (0,es/* useDispatch */.I0)();

  var onFieldChange = function onFieldChange(key, value) {
    dispatch(changeValueRegister(key, value));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!registered && /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit,
      className: "register_form",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "register_form_title",
        children: "Inscription"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
        form: "register",
        name: "nameRegister",
        value: nameRegister,
        type: "name",
        placeholder: "Nom d'utilisateur",
        onFieldChange: onFieldChange
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
        form: "register",
        name: "emailRegister",
        value: emailRegister,
        type: "email",
        placeholder: "E-mail",
        onFieldChange: onFieldChange
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
        form: "register",
        name: "passwordRegister",
        value: passwordRegister,
        type: "password",
        placeholder: "Mot de passe",
        onFieldChange: onFieldChange
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
        form: "register",
        name: "role",
        value: "1",
        type: "radio",
        placeholder: "Professionnel",
        onFieldChange: onFieldChange
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
        form: "register",
        name: "role",
        value: "0",
        type: "radio",
        placeholder: "Utilisateur",
        onFieldChange: onFieldChange
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        type: "submit",
        className: "register_form_button",
        children: "S'inscrire"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "login_form_member",
        children: [" ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "/connexion",
          children: "D\xE9j\xE0 inscrit ?"
        })]
      })]
    }), registered && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
        children: " Vous pouvez dor\xE9navant vous connecter \xE0 votre compte."
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
        to: "/connexion",
        exact: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "",
          children: "CONNECTONS NOUS ENSEMBLE TEL DES NAVII"
        })
      })]
    })]
  });
};

/* harmony default export */ const Register = (RegisterForm);
;// CONCATENATED MODULE: ./src/actions/contact.js
var SEND_MESSAGE = 'SEND_MESSAGE';
var sendMessage = function sendMessage() {
  return {
    type: SEND_MESSAGE
  };
};
var CHANGE_VALUES = 'CHANGE_VALUES';
var changeValues = function changeValues(key, value) {
  return {
    type: CHANGE_VALUES,
    key: key,
    value: value
  };
};
;// CONCATENATED MODULE: ./src/components/Contact/Field/index.js
function Field_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// == Import : npm

 // == Composant



var ContactField = function ContactField(_ref) {
  var _jsx2;

  var form = _ref.form,
      value = _ref.value,
      type = _ref.type,
      name = _ref.name,
      placeholder = _ref.placeholder,
      onFieldContactChange = _ref.onFieldContactChange,
      required = _ref.required;

  var handleChange = function handleChange(evt) {
    onFieldContactChange(name, evt.target.value);
  };

  var inputId = "field-".concat(name);
  var className = "".concat(form, "_field_input");
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: value.length > 0 ? 'field field--has-content' : 'field',
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("input", (_jsx2 = {
      // React - state
      value: value,
      onChange: handleChange // infos de base
      ,
      id: inputId,
      type: type,
      className: "field-input",
      placeholder: placeholder
    }, Field_defineProperty(_jsx2, "className", className), Field_defineProperty(_jsx2, "required", "required"), Field_defineProperty(_jsx2, "name", name), _jsx2))
  });
};

ContactField.propTypes = {
  value: (prop_types_default()).string,
  type: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired,
  placeholder: (prop_types_default()).string.isRequired,
  onFieldContactChange: (prop_types_default()).func.isRequired
}; // Valeurs par défaut pour les props

ContactField.defaultProps = {
  value: '',
  type: 'text'
}; // == Export

/* harmony default export */ const Contact_Field = (ContactField);
;// CONCATENATED MODULE: ./src/components/Contact/Field/textarea.js

// == Import : npm

 // == Composant



var ContactFieldTextarea = function ContactFieldTextarea(_ref) {
  var value = _ref.value,
      type = _ref.type,
      name = _ref.name,
      placeholder = _ref.placeholder,
      onFieldContactChange = _ref.onFieldContactChange,
      required = _ref.required;

  var handleChange = function handleChange(evt) {
    onFieldContactChange(name, evt.target.value);
  };

  var inputId = "field-".concat(name);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: value.length > 0 ? 'field field--has-content' : 'field',
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("textarea", {
      // React - state
      value: value,
      onChange: handleChange // infos de base
      ,
      id: inputId,
      type: type,
      className: "field-input-textarea",
      placeholder: placeholder,
      name: name,
      required: "required"
    })
  });
};

ContactFieldTextarea.propTypes = {
  value: (prop_types_default()).string,
  type: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired,
  placeholder: (prop_types_default()).string.isRequired,
  onFieldContactChange: (prop_types_default()).func.isRequired
}; // Valeurs par défaut pour les props

ContactFieldTextarea.defaultProps = {
  value: '',
  type: 'text'
}; // == Export

/* harmony default export */ const Field_textarea = (ContactFieldTextarea);
;// CONCATENATED MODULE: ./src/components/Contact/index.js









var Contact = function Contact() {
  var nameContact = (0,es/* useSelector */.v9)(function (state) {
    return state.contact.nameContact;
  });
  var emailContact = (0,es/* useSelector */.v9)(function (state) {
    return state.contact.emailContact;
  });
  var objectContact = (0,es/* useSelector */.v9)(function (state) {
    return state.contact.objectContact;
  });
  var messageContact = (0,es/* useSelector */.v9)(function (state) {
    return state.contact.messageContact;
  });

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: 'SEND_MESSAGE'
    });
  };

  var dispatch = (0,es/* useDispatch */.I0)();

  var onFieldContactChange = function onFieldContactChange(key, value) {
    dispatch(changeValues(key, value));
  }; // Tester de créer notre propre onchange au lieu du OnField


  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit,
      className: "contact_form",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "login_form_title",
        children: "Contactez-nous"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Contact_Field, {
        name: "nameContact",
        value: nameContact,
        type: "name",
        placeholder: "Nom",
        onFieldContactChange: onFieldContactChange,
        required: "required"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Contact_Field, {
        name: "emailContact",
        value: emailContact,
        type: "email",
        placeholder: "E-mail",
        onFieldContactChange: onFieldContactChange,
        required: "required"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Contact_Field, {
        name: "objectContact",
        value: objectContact,
        type: "object",
        placeholder: "Objet du message",
        onFieldContactChange: onFieldContactChange,
        required: "required"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field_textarea, {
        name: "messageContact",
        value: messageContact,
        type: "message",
        placeholder: "Votre message",
        onFieldContactChange: onFieldContactChange,
        required: "required"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        type: "submit",
        className: "contact_form_button",
        children: "Envoyer"
      })]
    })
  });
};

/* harmony default export */ const components_Contact = (Contact);
;// CONCATENATED MODULE: ./src/assets/images/equipe/Arnaud_clear.png
/* harmony default export */ const Arnaud_clear = (__webpack_require__.p + "images/14c032b443cd7a920157f7db1c3ad386.png");
;// CONCATENATED MODULE: ./src/assets/images/equipe/Julien_clear.png
/* harmony default export */ const Julien_clear = (__webpack_require__.p + "images/4c69e155c09377d0a2a8bf9b1b80701a.png");
;// CONCATENATED MODULE: ./src/assets/images/equipe/Ludo_clear.png
/* harmony default export */ const Ludo_clear = (__webpack_require__.p + "images/65f5ec3225874c834ca239c0f19d85e8.png");
;// CONCATENATED MODULE: ./src/assets/images/equipe/Samuel_clear.png
/* harmony default export */ const Samuel_clear = (__webpack_require__.p + "images/c4e8fa03e74735873796b8b85d67c73b.png");
;// CONCATENATED MODULE: ./src/assets/images/equipe/Vincent_clear_02.png
/* harmony default export */ const Vincent_clear_02 = (__webpack_require__.p + "images/3796c12ef3833d12691953fd3af13ad8.png");
;// CONCATENATED MODULE: ./src/assets/images/equipe/Anaglyph.png
/* harmony default export */ const Anaglyph = (__webpack_require__.p + "images/3f261d24b96998ef09b8c64eb7606b8b.png");
;// CONCATENATED MODULE: ./src/assets/images/equipe/Oakley_02.png
/* harmony default export */ const Oakley_02 = (__webpack_require__.p + "images/a47379e113119949999edb9f02293c60.png");
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var io5_index_esm = __webpack_require__(155);
;// CONCATENATED MODULE: ./src/components/Team/index.js













var Team = function Team() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      className: "team_card_title",
      children: "Les g\xE9nies derri\xE8re ce magnifique projet"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "team",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "team_card team_card_1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "team_card_circle color_1"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "team_card_img",
          src: Arnaud_clear
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "team_card_text",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_name",
            children: "Arnaud"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_role",
            children: "Git Master"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "team_card_contact",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoLinkedin */.gXb, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoGithub */.JOq, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "toto@gmail.com",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoMailSharp */.yZW, {})
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "team_card team_card_2",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "team_card_circle color_2"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "team_card_img",
          src: Julien_clear
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "team_card_text",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_name",
            children: "Julienn"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_role",
            children: "Lead Dev Back"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "team_card_contact",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoLinkedin */.gXb, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoGithub */.JOq, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "toto@gmail.com",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoMailSharp */.yZW, {})
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "team_card team_card_3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "team_card_circle color_3"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "team_card_img",
          src: Ludo_clear
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          id: "anaglyph_img",
          className: "team_card_img_bonus",
          src: Anaglyph
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          id: "anaglyph_txt",
          className: "team_card_text",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_name",
            children: "Ludo"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_role",
            children: "Lead Dev Front"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "team_card_contact",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoLinkedin */.gXb, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoGithub */.JOq, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "toto@gmail.com",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoMailSharp */.yZW, {})
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "team_card team_card_4",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "team_card_circle color_4"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "team_card_img",
          src: Samuel_clear
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          id: "oakley_img",
          className: "team_card_img_bonus",
          src: Oakley_02
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          id: "oakley_txt",
          className: "team_card_text",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_name",
            children: "Samuel"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_role",
            children: "Product Owner"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "team_card_contact",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoLinkedin */.gXb, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoGithub */.JOq, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "toto@gmail.com",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoMailSharp */.yZW, {})
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "team_card team_card_5",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "team_card_circle color_5"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "team_card_img",
          src: Vincent_clear_02
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "team_card_text",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_name",
            children: "Vincent"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_role",
            children: "Project Manager"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "team_card_contact"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "team_card_contact",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoGithub */.JOq, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoLogoLinkedin */.gXb, {})
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              className: "team_card_contact_icon",
              href: "toto@gmail.com",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(io5_index_esm/* IoMailSharp */.yZW, {})
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
      height: "0",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("filter", {
        id: "drop-shadow",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("feGaussianBlur", {
          "in": "SourceAlpha",
          stdDeviation: "4"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("feOffset", {
          dx: "10",
          dy: "-12",
          result: "offsetblur"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("feFlood", {
          floodColor: "rgba(40,40,40,0.4)"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("feComposite", {
          in2: "offsetblur",
          operator: "in"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("feMerge", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("feMergeNode", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("feMergeNode", {
            "in": "SourceGraphic"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const components_Team = (Team);
;// CONCATENATED MODULE: ./src/assets/images/background/background_03.jpg
/* harmony default export */ const background_03 = (__webpack_require__.p + "images/35f994045b295a6ce0f40bce7d8c8ddb.jpg");
;// CONCATENATED MODULE: ./src/components/Legals/index.js






var Legals = function Legals() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "legals_box",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "legals_title",
        children: "Mentions l\xE9gales ..."
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "D\xE9finitions"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("b", {
            children: "Client :"
          }), " tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des pr\xE9sentes conditions g\xE9n\xE9rales.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("b", {
            children: "Prestations et Services :"
          }), " ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " met \xE0 disposition des Clients :"]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("b", {
            children: "Contenu :"
          }), " Ensemble des \xE9l\xE9ments constituants l\u2019information pr\xE9sente sur le Site, notamment textes \u2013 images \u2013 vid\xE9os."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("b", {
            children: "Informations clients :"
          }), " Ci apr\xE8s d\xE9nomm\xE9 \xAB Information (s) \xBB qui correspondent \xE0 l\u2019ensemble des donn\xE9es personnelles susceptibles d\u2019\xEAtre d\xE9tenues par ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " pour la gestion de votre compte, de la gestion de la relation client et \xE0 des fins d\u2019analyses et de statistiques."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("b", {
            children: "Utilisateur :"
          }), " Internaute se connectant, utilisant le site susnomm\xE9."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("b", {
            children: "Informations personnelles :"
          }), " \xAB Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent \xBB (article 4 de la loi n\xB0 78-17 du 6 janvier 1978)."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Les termes \xAB donn\xE9es \xE0 caract\xE8re personnel \xBB, \xAB personne concern\xE9e \xBB, \xAB sous traitant \xBB et \xAB donn\xE9es sensibles \xBB ont le sens d\xE9fini par le R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD : n\xB0 2016-679)"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "1. Pr\xE9sentation du site internet."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["En vertu de l'article 6 de la loi n\xB0 2004-575 du 21 juin 2004 pour la confiance dans l'\xE9conomie num\xE9rique, il est pr\xE9cis\xE9 aux utilisateurs du site internet ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " l'identit\xE9 des diff\xE9rents intervenants dans le cadre de sa r\xE9alisation et de son suivi:"]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "Propri\xE9taire"
          }), " :  SAS FIND MY TRUCK Capital social de 1 680 026 \u20AC Num\xE9ro de TVA: 666 666 666 \u2013 10 rue de Penthievre 75008 Paris", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "Responsable publication"
          }), " : FIND MY TRUCK \u2013 findmytruck2021@gmail.com", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Le responsable publication est une personne physique ou une personne morale.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "Webmaster"
          }), " : FIND MY TRUCK \u2013 findmytruck2021@gmail.com", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "H\xE9bergeur"
          }), " : ovh \u2013 2 rue Kellermann 59100 Roubaix 1007", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "D\xE9l\xE9gu\xE9 \xE0 la protection des donn\xE9es"
          }), " : FIND MY TRUCK \u2013 findmytruck2021@gmail.com", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "2. Conditions g\xE9n\xE9rales d\u2019utilisation du site et des services propos\xE9s."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Le Site constitue une \u0153uvre de l\u2019esprit prot\xE9g\xE9e par les dispositions du Code de la Propri\xE9t\xE9 Intellectuelle et des R\xE9glementations Internationales applicables. Le Client ne peut en aucune mani\xE8re r\xE9utiliser, c\xE9der ou exploiter pour son propre compte tout ou partie des \xE9l\xE9ments ou travaux du Site."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["L\u2019utilisation du site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " implique l\u2019acceptation pleine et enti\xE8re des conditions g\xE9n\xE9rales d\u2019utilisation ci-apr\xE8s d\xE9crites. Ces conditions d\u2019utilisation sont susceptibles d\u2019\xEAtre modifi\xE9es ou compl\xE9t\xE9es \xE0 tout moment, les utilisateurs du site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " sont donc invit\xE9s \xE0 les consulter de mani\xE8re r\xE9guli\xE8re."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Ce site internet est normalement accessible \xE0 tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut \xEAtre toutefois d\xE9cid\xE9e par ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), ", qui s\u2019efforcera alors de communiquer pr\xE9alablement aux utilisateurs les dates et heures de l\u2019intervention. Le site web ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " est mis \xE0 jour r\xE9guli\xE8rement par ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " responsable. De la m\xEAme fa\xE7on, les mentions l\xE9gales peuvent \xEAtre modifi\xE9es \xE0 tout moment : elles s\u2019imposent n\xE9anmoins \xE0 l\u2019utilisateur qui est invit\xE9 \xE0 s\u2019y r\xE9f\xE9rer le plus souvent possible afin d\u2019en prendre connaissance."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "3. Description des services fournis."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Le site internet ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " a pour objet de fournir une information concernant l\u2019ensemble des activit\xE9s de la soci\xE9t\xE9.", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " s\u2019efforce de fournir sur le site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " des informations aussi pr\xE9cises que possible. Toutefois, il ne pourra \xEAtre tenu responsable des oublis, des inexactitudes et des carences dans la mise \xE0 jour, qu\u2019elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Toutes les informations indiqu\xE9es sur le site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " sont donn\xE9es \xE0 titre indicatif, et sont susceptibles d\u2019\xE9voluer. Par ailleurs, les renseignements figurant sur le site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " ne sont pas exhaustifs. Ils sont donn\xE9s sous r\xE9serve de modifications ayant \xE9t\xE9 apport\xE9es depuis leur mise en ligne."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "4. Limitations contractuelles sur les donn\xE9es techniques."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Le site utilise la technologie JavaScript. Le site Internet ne pourra \xEAtre tenu responsable de dommages mat\xE9riels li\xE9s \xE0 l\u2019utilisation du site. De plus, l\u2019utilisateur du site s\u2019engage \xE0 acc\xE9der au site en utilisant un mat\xE9riel r\xE9cent, ne contenant pas de virus et avec un navigateur de derni\xE8re g\xE9n\xE9ration mis-\xE0-jour Le site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " est h\xE9berg\xE9 chez un prestataire sur le territoire de l\u2019Union Europ\xE9enne conform\xE9ment aux dispositions du R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD : n\xB0 2016-679)"]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "L\u2019objectif est d\u2019apporter une prestation qui assure le meilleur taux d\u2019accessibilit\xE9. L\u2019h\xE9bergeur assure la continuit\xE9 de son service 24 Heures sur 24, tous les jours de l\u2019ann\xE9e. Il se r\xE9serve n\xE9anmoins la possibilit\xE9 d\u2019interrompre le service d\u2019h\xE9bergement pour les dur\xE9es les plus courtes possibles notamment \xE0 des fins de maintenance, d\u2019am\xE9lioration de ses infrastructures, de d\xE9faillance de ses infrastructures ou si les Prestations et Services g\xE9n\xE8rent un trafic r\xE9put\xE9 anormal."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " et l\u2019h\xE9bergeur ne pourront \xEAtre tenus responsables en cas de dysfonctionnement du r\xE9seau Internet, des lignes t\xE9l\xE9phoniques ou du mat\xE9riel informatique et de t\xE9l\xE9phonie li\xE9 notamment \xE0 l\u2019encombrement du r\xE9seau emp\xEAchant l\u2019acc\xE8s au serveur."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "5. Propri\xE9t\xE9 intellectuelle et contrefa\xE7ons."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " est propri\xE9taire des droits de propri\xE9t\xE9 intellectuelle et d\xE9tient les droits d\u2019usage sur tous les \xE9l\xE9ments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vid\xE9os, ic\xF4nes et sons. Toute reproduction, repr\xE9sentation, modification, publication, adaptation de tout ou partie des \xE9l\xE9ments du site, quel que soit le moyen ou le proc\xE9d\xE9 utilis\xE9, est interdite, sauf autorisation \xE9crite pr\xE9alable de : ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), "."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Toute exploitation non autoris\xE9e du site ou de l\u2019un quelconque des \xE9l\xE9ments qu\u2019il contient sera consid\xE9r\xE9e comme constitutive d\u2019une contrefa\xE7on et poursuivie conform\xE9ment aux dispositions des articles L.335-2 et suivants du Code de Propri\xE9t\xE9 Intellectuelle."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "6. Limitations de responsabilit\xE9."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " agit en tant qu\u2019\xE9diteur du site. ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), "  est responsable de la qualit\xE9 et de la v\xE9racit\xE9 du Contenu qu\u2019il publie. "]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " ne pourra \xEAtre tenu responsable des dommages directs et indirects caus\xE9s au mat\xE9riel de l\u2019utilisateur, lors de l\u2019acc\xE8s au site internet ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), ", et r\xE9sultant soit de l\u2019utilisation d\u2019un mat\xE9riel ne r\xE9pondant pas aux sp\xE9cifications indiqu\xE9es au point 4, soit de l\u2019apparition d\u2019un bug ou d\u2019une incompatibilit\xE9."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " ne pourra \xE9galement \xEAtre tenu responsable des dommages indirects (tels par exemple qu\u2019une perte de march\xE9 ou perte d\u2019une chance) cons\xE9cutifs \xE0 l\u2019utilisation du site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), ". Des espaces interactifs (possibilit\xE9 de poser des questions dans l\u2019espace contact) sont \xE0 la disposition des utilisateurs. ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " se r\xE9serve le droit de supprimer, sans mise en demeure pr\xE9alable, tout contenu d\xE9pos\xE9 dans cet espace qui contreviendrait \xE0 la l\xE9gislation applicable en France, en particulier aux dispositions relatives \xE0 la protection des donn\xE9es. Le cas \xE9ch\xE9ant, ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " se r\xE9serve \xE9galement la possibilit\xE9 de mettre en cause la responsabilit\xE9 civile et/ou p\xE9nale de l\u2019utilisateur, notamment en cas de message \xE0 caract\xE8re raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilis\xE9 (texte, photographie \u2026)."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "7. Gestion des donn\xE9es personnelles."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Le Client est inform\xE9 des r\xE9glementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l\u2019Economie Num\xE9rique, la Loi Informatique et Libert\xE9 du 06 Ao\xFBt 2004 ainsi que du R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD : n\xB0 2016-679). "
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          children: "7.1 Responsables de la collecte des donn\xE9es personnelles"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Pour les Donn\xE9es Personnelles collect\xE9es dans le cadre de la cr\xE9ation du compte personnel de l\u2019Utilisateur et de sa navigation sur le Site, le responsable du traitement des Donn\xE9es Personnelles est : FIND MY TRUCK. ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), "est repr\xE9sent\xE9 par FIND MY TRUCK, son repr\xE9sentant l\xE9gal"]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["En tant que responsable du traitement des donn\xE9es qu\u2019il collecte, ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " s\u2019engage \xE0 respecter le cadre des dispositions l\xE9gales en vigueur. Il lui appartient notamment au Client d\u2019\xE9tablir les finalit\xE9s de ses traitements de donn\xE9es, de fournir \xE0 ses prospects et clients, \xE0 partir de la collecte de leurs consentements, une information compl\xE8te sur le traitement de leurs donn\xE9es personnelles et de maintenir un registre des traitements conforme \xE0 la r\xE9alit\xE9. Chaque fois que ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " traite des Donn\xE9es Personnelles, ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " prend toutes les mesures raisonnables pour s\u2019assurer de l\u2019exactitude et de la pertinence des Donn\xE9es Personnelles au regard des finalit\xE9s pour lesquelles ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " les traite."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          children: "7.2 Finalit\xE9 des donn\xE9es collect\xE9es"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " est susceptible de traiter tout ou partie des donn\xE9es : "]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: "pour permettre la navigation sur le Site et la gestion et la tra\xE7abilit\xE9 des prestations et services command\xE9s par l\u2019utilisateur : donn\xE9es de connexion et d\u2019utilisation du Site, facturation, historique des commandes, etc. "
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: "pour pr\xE9venir et lutter contre la fraude informatique (spamming, hacking\u2026) : mat\xE9riel informatique utilis\xE9 pour la navigation, l\u2019adresse IP, le mot de passe (hash\xE9) "
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: "pour am\xE9liorer la navigation sur le Site : donn\xE9es de connexion et d\u2019utilisation "
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: ["pour mener des enqu\xEAtes de satisfaction facultatives sur ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              href: "https://findmytruck.com",
              children: "https://findmytruck.com"
            }), " : adresse email "]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: "pour mener des campagnes de communication (sms, mail) : num\xE9ro de t\xE9l\xE9phone, adresse email"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " ne commercialise pas vos donn\xE9es personnelles qui sont donc uniquement utilis\xE9es par n\xE9cessit\xE9 ou \xE0 des fins statistiques et d\u2019analyses."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          children: "7.3 Droit d\u2019acc\xE8s, de rectification et d\u2019opposition"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Conform\xE9ment \xE0 la r\xE9glementation europ\xE9enne en vigueur, les Utilisateurs de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " disposent des droits suivants : "]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: "droit d'acc\xE8s (article 15 RGPD) et de rectification (article 16 RGPD), de mise \xE0 jour, de compl\xE9tude des donn\xE9es des Utilisateurs droit de verrouillage ou d\u2019effacement des donn\xE9es des Utilisateurs \xE0 caract\xE8re personnel (article 17 du RGPD), lorsqu\u2019elles sont inexactes, incompl\xE8tes, \xE9quivoques, p\xE9rim\xE9es, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite "
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: "droit de retirer \xE0 tout moment un consentement (article 13-2c RGPD) "
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: "droit \xE0 la limitation du traitement des donn\xE9es des Utilisateurs (article 18 RGPD) "
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: "droit d\u2019opposition au traitement des donn\xE9es des Utilisateurs (article 21 RGPD) "
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
            children: "droit \xE0 la portabilit\xE9 des donn\xE9es que les Utilisateurs auront fournies, lorsque ces donn\xE9es font l\u2019objet de traitements automatis\xE9s fond\xE9s sur leur consentement ou sur un contrat (article 20 RGPD) "
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: ["droit de d\xE9finir le sort des donn\xE9es des Utilisateurs apr\xE8s leur mort et de choisir \xE0 qui ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              href: "https://findmytruck.com",
              children: "https://findmytruck.com"
            }), " devra communiquer (ou non) ses donn\xE9es \xE0 un tiers qu\u2019ils aura pr\xE9alablement d\xE9sign\xE9"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["D\xE8s que ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " a connaissance du d\xE9c\xE8s d\u2019un Utilisateur et \xE0 d\xE9faut d\u2019instructions de sa part, ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " s\u2019engage \xE0 d\xE9truire ses donn\xE9es, sauf si leur conservation s\u2019av\xE8re n\xE9cessaire \xE0 des fins probatoires ou pour r\xE9pondre \xE0 une obligation l\xE9gale."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Si l\u2019Utilisateur souhaite savoir comment ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " utilise ses Donn\xE9es Personnelles, demander \xE0 les rectifier ou s\u2019oppose \xE0 leur traitement, l\u2019Utilisateur peut contacter ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " par \xE9crit \xE0 l\u2019adresse suivante : "]
        }), "FIND MY TRUCK \u2013 DPO, FIND MY TRUCK ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "10 rue de Penthievre 75008 Paris.", /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Dans ce cas, l\u2019Utilisateur doit indiquer les Donn\xE9es Personnelles qu\u2019il souhaiterait que ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " corrige, mette \xE0 jour ou supprime, en s\u2019identifiant pr\xE9cis\xE9ment avec une copie d\u2019une pi\xE8ce d\u2019identit\xE9 (carte d\u2019identit\xE9 ou passeport). "]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Les demandes de suppression de Donn\xE9es Personnelles seront soumises aux obligations qui sont impos\xE9es \xE0 ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " par la loi, notamment en mati\xE8re de conservation ou d\u2019archivage des documents. Enfin, les Utilisateurs de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " peuvent d\xE9poser une r\xE9clamation aupr\xE8s des autorit\xE9s de contr\xF4le, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes)."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          children: "7.4 Non-communication des donn\xE9es personnelles"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " s\u2019interdit de traiter, h\xE9berger ou transf\xE9rer les Informations collect\xE9es sur ses Clients vers un pays situ\xE9 en dehors de l\u2019Union europ\xE9enne ou reconnu comme \xAB non ad\xE9quat \xBB par la Commission europ\xE9enne sans en informer pr\xE9alablement le client. Pour autant, ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " reste libre du choix de ses sous-traitants techniques et commerciaux \xE0 la condition qu\u2019il pr\xE9sentent les garanties suffisantes au regard des exigences du R\xE8glement G\xE9n\xE9ral sur la Protection des Donn\xE9es (RGPD : n\xB0 2016-679)."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " s\u2019engage \xE0 prendre toutes les pr\xE9cautions n\xE9cessaires afin de pr\xE9server la s\xE9curit\xE9 des Informations et notamment qu\u2019elles ne soient pas communiqu\xE9es \xE0 des personnes non autoris\xE9es. Cependant, si un incident impactant l\u2019int\xE9grit\xE9 ou la confidentialit\xE9 des Informations du Client est port\xE9e \xE0 la connaissance de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), ", celle-ci devra dans les meilleurs d\xE9lais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " ne collecte aucune \xAB donn\xE9es sensibles \xBB."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Les Donn\xE9es Personnelles de l\u2019Utilisateur peuvent \xEAtre trait\xE9es par des filiales de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " et des sous-traitants (prestataires de services), exclusivement afin de r\xE9aliser les finalit\xE9s de la pr\xE9sente politique."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Dans la limite de leurs attributions respectives et pour les finalit\xE9s rappel\xE9es ci-dessus, les principales personnes susceptibles d\u2019avoir acc\xE8s aux donn\xE9es des Utilisateurs de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " sont principalement les agents de notre service client."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "ng-bind-html": "rgpdHTML"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "8. Notification d\u2019incident"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Quels que soient les efforts fournis, aucune m\xE9thode de transmission sur Internet et aucune m\xE9thode de stockage \xE9lectronique n'est compl\xE8tement s\xFBre. Nous ne pouvons en cons\xE9quence pas garantir une s\xE9curit\xE9 absolue. Si nous prenions connaissance d'une br\xE8che de la s\xE9curit\xE9, nous avertirions les utilisateurs concern\xE9s afin qu'ils puissent prendre les mesures appropri\xE9es. Nos proc\xE9dures de notification d\u2019incident tiennent compte de nos obligations l\xE9gales, qu'elles se situent au niveau national ou europ\xE9en. Nous nous engageons \xE0 informer pleinement nos clients de toutes les questions relevant de la s\xE9curit\xE9 de leur compte et \xE0 leur fournir toutes les informations n\xE9cessaires pour les aider \xE0 respecter leurs propres obligations r\xE9glementaires en mati\xE8re de reporting."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Aucune information personnelle de l'utilisateur du site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " n'est publi\xE9e \xE0 l'insu de l'utilisateur, \xE9chang\xE9e, transf\xE9r\xE9e, c\xE9d\xE9e ou vendue sur un support quelconque \xE0 des tiers. Seule l'hypoth\xE8se du rachat de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " et de ses droits permettrait la transmission des dites informations \xE0 l'\xE9ventuel acqu\xE9reur qui serait \xE0 son tour tenu de la m\xEAme obligation de conservation et de modification des donn\xE9es vis \xE0 vis de l'utilisateur du site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), "."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          children: "S\xE9curit\xE9"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Pour assurer la s\xE9curit\xE9 et la confidentialit\xE9 des Donn\xE9es Personnelles et des Donn\xE9es Personnelles de Sant\xE9, ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " utilise des r\xE9seaux prot\xE9g\xE9s par des dispositifs standards tels que par pare-feu, la pseudonymisation, l\u2019encryption et mot de passe. "]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Lors du traitement des Donn\xE9es Personnelles, ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), "prend toutes les mesures raisonnables visant \xE0 les prot\xE9ger contre toute perte, utilisation d\xE9tourn\xE9e, acc\xE8s non autoris\xE9, divulgation, alt\xE9ration ou destruction."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "9. Liens hypertextes \xAB cookies \xBB et balises (\u201Ctags\u201D) internet"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Le site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " contient un certain nombre de liens hypertextes vers d\u2019autres sites, mis en place avec l\u2019autorisation de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), ". Cependant, ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " n\u2019a pas la possibilit\xE9 de v\xE9rifier le contenu des sites ainsi visit\xE9s, et n\u2019assumera en cons\xE9quence aucune responsabilit\xE9 de ce fait."]
        }), "Sauf si vous d\xE9cidez de d\xE9sactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez \xE0 tout moment d\xE9sactiver ces cookies et ce gratuitement \xE0 partir des possibilit\xE9s de d\xE9sactivation qui vous sont offertes et rappel\xE9es ci-apr\xE8s, sachant que cela peut r\xE9duire ou emp\xEAcher l\u2019accessibilit\xE9 \xE0 tout ou partie des Services propos\xE9s par le site.", /*#__PURE__*/(0,jsx_runtime.jsx)("p", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          children: "9.1. \xAB COOKIES \xBB"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Un \xAB cookie \xBB est un petit fichier d\u2019information envoy\xE9 sur le navigateur de l\u2019Utilisateur et enregistr\xE9 au sein du terminal de l\u2019Utilisateur (ex : ordinateur, smartphone), (ci-apr\xE8s \xAB Cookies \xBB). Ce fichier comprend des informations telles que le nom de domaine de l\u2019Utilisateur, le fournisseur d\u2019acc\xE8s Internet de l\u2019Utilisateur, le syst\xE8me d\u2019exploitation de l\u2019Utilisateur, ainsi que la date et l\u2019heure d\u2019acc\xE8s. Les Cookies ne risquent en aucun cas d\u2019endommager le terminal de l\u2019Utilisateur."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " est susceptible de traiter les informations de l\u2019Utilisateur concernant sa visite du Site, telles que les pages consult\xE9es, les recherches effectu\xE9es. Ces informations permettent \xE0 ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " d\u2019am\xE9liorer le contenu du Site, de la navigation de l\u2019Utilisateur."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Les Cookies facilitant la navigation et/ou la fourniture des services propos\xE9s par le Site, l\u2019Utilisateur peut configurer son navigateur pour qu\u2019il lui permette de d\xE9cider s\u2019il souhaite ou non les accepter de mani\xE8re \xE0 ce que des Cookies soient enregistr\xE9s dans le terminal ou, au contraire, qu\u2019ils soient rejet\xE9s, soit syst\xE9matiquement, soit selon leur \xE9metteur. L\u2019Utilisateur peut \xE9galement configurer son logiciel de navigation de mani\xE8re \xE0 ce que l\u2019acceptation ou le refus des Cookies lui soient propos\xE9s ponctuellement, avant qu\u2019un Cookie soit susceptible d\u2019\xEAtre enregistr\xE9 dans son terminal. ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " informe l\u2019Utilisateur que, dans ce cas, il se peut que les fonctionnalit\xE9s de son logiciel de navigation ne soient pas toutes disponibles."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Si l\u2019Utilisateur refuse l\u2019enregistrement de Cookies dans son terminal ou son navigateur, ou si l\u2019Utilisateur supprime ceux qui y sont enregistr\xE9s, l\u2019Utilisateur est inform\xE9 que sa navigation et son exp\xE9rience sur le Site peuvent \xEAtre limit\xE9es. Cela pourrait \xE9galement \xEAtre le cas lorsque ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " ou l\u2019un de ses prestataires ne peut pas reconna\xEEtre, \xE0 des fins de compatibilit\xE9 technique, le type de navigateur utilis\xE9 par le terminal, les param\xE8tres de langue et d\u2019affichage ou le pays depuis lequel le terminal semble connect\xE9 \xE0 Internet."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Le cas \xE9ch\xE9ant, ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " d\xE9cline toute responsabilit\xE9 pour les cons\xE9quences li\xE9es au fonctionnement d\xE9grad\xE9 du Site et des services \xE9ventuellement propos\xE9s par ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), ", r\xE9sultant (i) du refus de Cookies par l\u2019Utilisateur (ii) de l\u2019impossibilit\xE9 pour ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " d\u2019enregistrer ou de consulter les Cookies n\xE9cessaires \xE0 leur fonctionnement du fait du choix de l\u2019Utilisateur. Pour la gestion des Cookies et des choix de l\u2019Utilisateur, la configuration de chaque navigateur est diff\xE9rente. Elle est d\xE9crite dans le menu d\u2019aide du navigateur, qui permettra de savoir de quelle mani\xE8re l\u2019Utilisateur peut modifier ses souhaits en mati\xE8re de Cookies."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["\xC0 tout moment, l\u2019Utilisateur peut faire le choix d\u2019exprimer et de modifier ses souhaits en mati\xE8re de Cookies. ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " pourra en outre faire appel aux services de prestataires externes pour l\u2019aider \xE0 recueillir et traiter les informations d\xE9crites dans cette section."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Enfin, en cliquant sur les ic\xF4nes d\xE9di\xE9es aux r\xE9seaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " ou dans son application mobile et si l\u2019Utilisateur a accept\xE9 le d\xE9p\xF4t de cookies en poursuivant sa navigation sur le Site Internet ou l\u2019application mobile de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), ", Twitter, Facebook, Linkedin et Google Plus peuvent \xE9galement d\xE9poser des cookies sur vos terminaux (ordinateur, tablette, t\xE9l\xE9phone portable)."]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Ces types de cookies ne sont d\xE9pos\xE9s sur vos terminaux qu\u2019\xE0 condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l\u2019application mobile de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), ". \xC0 tout moment, l\u2019Utilisateur peut n\xE9anmoins revenir sur son consentement \xE0 ce que ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " d\xE9pose ce type de cookies."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          children: "Article 9.2. BALISES (\u201CTAGS\u201D) INTERNET"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " peut employer occasionnellement des balises Internet (\xE9galement appel\xE9es \xAB tags \xBB, ou balises d\u2019action, GIF \xE0 un pixel, GIF transparents, GIF invisibles et GIF un \xE0 un) et les d\xE9ployer par l\u2019interm\xE9diaire d\u2019un partenaire sp\xE9cialiste d\u2019analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l\u2019adresse IP de l\u2019Utilisateur) dans un pays \xE9tranger."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Ces balises sont plac\xE9es \xE0 la fois dans les publicit\xE9s en ligne permettant aux internautes d\u2019acc\xE9der au Site, et sur les diff\xE9rentes pages de celui-ci."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Cette technologie permet \xE0 ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " d\u2019\xE9valuer les r\xE9ponses des visiteurs face au Site et l\u2019efficacit\xE9 de ses actions (par exemple, le nombre de fois o\xF9 une page est ouverte et les informations consult\xE9es), ainsi que l\u2019utilisation de ce Site par l\u2019Utilisateur. "]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Le prestataire externe pourra \xE9ventuellement recueillir des informations sur les visiteurs du Site et d\u2019autres sites Internet gr\xE2ce \xE0 ces balises, constituer des rapports sur l\u2019activit\xE9 du Site \xE0 l\u2019attention de ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), ", et fournir d\u2019autres services relatifs \xE0 l\u2019utilisation de celui-ci et d\u2019Internet."]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
          children: "10. Droit applicable et attribution de juridiction."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Tout litige en relation avec l\u2019utilisation du site ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://findmytruck.com",
            children: "https://findmytruck.com"
          }), " est soumis au droit fran\xE7ais. En dehors des cas o\xF9 la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux comp\xE9tents de Paris"]
        })]
      })]
    })
  });
};

/* harmony default export */ const components_Legals = (Legals);
;// CONCATENATED MODULE: ./src/actions/profil.js
var TYPE_VALUES = 'TYPE_VALUES';
var typeValues = function typeValues(key, value) {
  return {
    type: TYPE_VALUES,
    key: key,
    value: value
  };
};
var UPDATE_INFORMATIONS = 'UPDATE_INFORMATIONS';
var updateInformations = function updateInformations() {
  return {
    type: UPDATE_INFORMATIONS
  };
};
var SHOW_MODIFY_INFORMATIONS = 'SHOW_MODIFY_INFORMATIONS';
var showModifyInformations = function showModifyInformations() {
  return {
    type: SHOW_MODIFY_INFORMATIONS
  };
};
var HIDE_MODIFY_INFORMATIONS = 'HIDE_MODIFY_INFORMATIONS';
var hideModifyInformations = function hideModifyInformations() {
  return {
    type: HIDE_MODIFY_INFORMATIONS
  };
};
;// CONCATENATED MODULE: ./src/components/Profil/index.js







var Profil = function Profil() {
  // const for the storage data
  var data = JSON.parse(sessionStorage.getItem('key'));
  var informations = data.data;
  var role = informations.roles;
  var informationsFoodtruck = informations.user_foodtruck;
  console.log(informationsFoodtruck); // const for the state

  var nicknameProfil = (0,es/* useSelector */.v9)(function (state) {
    return state.profil.nicknameProfil;
  });
  var emailProfil = (0,es/* useSelector */.v9)(function (state) {
    return state.profil.emailProfil;
  });
  var firstnameProfil = (0,es/* useSelector */.v9)(function (state) {
    return state.profil.firstnameProfil;
  });
  var lastnameProfil = (0,es/* useSelector */.v9)(function (state) {
    return state.profil.lastnameProfil;
  });
  var streetProfil = (0,es/* useSelector */.v9)(function (state) {
    return state.profil.streetProfil;
  });
  var cityProfil = (0,es/* useSelector */.v9)(function (state) {
    return state.profil.cityProfil;
  });
  var postalCodeProfil = (0,es/* useSelector */.v9)(function (state) {
    return state.profil.postalCodeProfil;
  });
  var warning = (0,es/* useSelector */.v9)(function (state) {
    return state.profil.warning;
  });
  var modify = (0,es/* useSelector */.v9)(function (state) {
    return state.profil.modify;
  });
  var dispatch = (0,es/* useDispatch */.I0)();

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_INFORMATIONS'
    });
  };

  var onFieldChange = function onFieldChange(key, value) {
    dispatch(typeValues(key, value));
  };

  var handleClick = function handleClick(event) {
    console.log('blabla');
    dispatch({
      type: 'SHOW_MODIFY_INFORMATIONS',
      modify: true
    });
  };

  var hideModify = function hideModify(event) {
    console.log('blabla');
    dispatch({
      type: 'HIDE_MODIFY_INFORMATIONS',
      modify: false
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [modify === false && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "profil",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "profil_nickname",
        children: [" On est sur ton profil ", informations.nickname, " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "profil_email",
        children: [" Voici ton email ", informations.email, " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "profil_firstname",
        children: [" Voici ton pr\xE9nom ", informations.firstname, " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "profil_lastname",
        children: [" Voici ton nom de famille ", informations.lastname, " "]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "profil_address",
        children: [" Voici ton adresse ", informations.address, " "]
      })]
    }), modify === true && /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit,
      className: "profil_form",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "profilForm",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "nicknameForm",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
            form: "profil",
            name: "nicknameProfil",
            value: nicknameProfil,
            type: "text",
            placeholder: "IDENTIFIANT",
            onFieldChange: onFieldChange
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "emailForm",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
            form: "profil",
            name: "emailProfil",
            value: emailProfil,
            type: "text",
            placeholder: "E-Mail",
            onFieldChange: onFieldChange
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "firstnameForm",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
            form: "profil",
            name: "firstnameProfil",
            value: firstnameProfil,
            type: "text",
            placeholder: "Pr\xE9nom",
            onFieldChange: onFieldChange
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "lastnameForm",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
            form: "profil",
            name: "lastnameProfil",
            value: lastnameProfil,
            type: "text",
            placeholder: "Nom de famille",
            onFieldChange: onFieldChange
          })
        }), role[0] === "ROLE_PRO" && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "addressForm",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
              form: "profil",
              name: "streetProfil",
              value: streetProfil,
              type: "text",
              placeholder: "Adresse Postale",
              onFieldChange: onFieldChange
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "cityForm",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
              form: "profil",
              name: "cityProfil",
              value: cityProfil,
              type: "text",
              placeholder: "Ville",
              onFieldChange: onFieldChange
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "postal_codeForm",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Forms_Field, {
              form: "profil",
              name: "postalCodeProfil",
              value: postalCodeProfil,
              type: "text",
              placeholder: "Code Postal",
              onFieldChange: onFieldChange
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        type: "submit",
        className: "modified_button",
        value: "ENREGISTRER LES INFORMATIONS"
      })]
    }), modify === false && /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      onClick: handleClick,
      children: " Modifier les informations "
    }), modify === true && /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      onClick: hideModify,
      children: " Annuler les changements "
    }), warning === true && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "warning",
      children: "DECO RECO TOI SI TU VEUX VOIR LA DIFFERENCE"
    })]
  });
};

/* harmony default export */ const components_Profil = (Profil);
;// CONCATENATED MODULE: ./src/components/App/index.js
// == Import



 // import { LOGIN } from '../../reducers/user';












 // == Composant




function App() {
  var logged = (0,es/* useSelector */.v9)(function (state) {
    return state.user.logged;
  });
  var foodtruckList = (0,es/* useSelector */.v9)(function (state) {
    return state.foodtruck.list;
  }); // const isLogged = useSelector(state => state.user.isLogged);
  // const { pathname } = useLocation();
  // We use a hook to dispatch our action

  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    // On emet donc l'action avec le type 'LOG_USER'
    dispatch({
      type: 'LOG_USER'
    });
  }, []);
  var data = JSON.parse(sessionStorage.getItem('key'));
  console.log(data);

  if (data) {
    dispatch({
      type: LOGIN,
      logged: true,
      nickname: data.data.nickname,
      token: data.token
    });
  } // We call the views to display them on the page


  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "app",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Header, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: "/",
        exact: true,
        component: components_Home
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: "/connexion",
        exact: true,
        component: components_LoginForm
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: "/inscription",
        exact: true,
        component: Register
      }), logged && /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: "/profil",
        exact: true,
        component: components_Profil
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: "/contact",
        exact: true,
        component: components_Contact
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: "/equipe",
        exact: true,
        component: components_Team
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        path: "/mentions_legales",
        exact: true,
        component: components_Legals
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Footer, {})]
  });
} // == Export


/* harmony default export */ const components_App = (App);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 2 modules
var redux = __webpack_require__(8271);
;// CONCATENATED MODULE: ./src/reducers/user.js










function user_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function user_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { user_ownKeys(Object(source), true).forEach(function (key) { user_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { user_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function user_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // set the initial state

var initialState = {
  logged: false,
  email: '',
  password: '',
  nickname: '',
  token: '',
  address: '',
  lat: '',
  lon: ''
}; // define the reducer's properties/params

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case CHANGE_VALUE:
      return user_objectSpread(user_objectSpread({}, state), {}, user_defineProperty({}, action.key, action.value));

    case LOGIN:
      // the new state will have the new values (action.value)
      return user_objectSpread(user_objectSpread({}, state), {}, {
        logged: true,
        password: '',
        email: '',
        nickname: action.nickname,
        token: action.token
      });

    case 'SAVE_LAT_LNG':
      return user_objectSpread(user_objectSpread({}, state), {}, {
        lat: action.lat,
        lon: action.lon
      });

    case 'LOGOUT':
      return user_objectSpread(user_objectSpread({}, state), {}, {
        logged: false,
        nickname: '',
        token: ''
      });

    default:
      return state;
  }
};

/* harmony default export */ const user = (reducer); // const pseudo = useSelector((state) => state.user.pseudo);
;// CONCATENATED MODULE: ./src/reducers/contact.js










function contact_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function contact_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contact_ownKeys(Object(source), true).forEach(function (key) { contact_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contact_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function contact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // set the initial state

var contact_initialState = {
  nameContact: '',
  emailContact: '',
  objectContact: '',
  messageContact: ''
}; // define the reducer's properties/params

var contact_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : contact_initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case CHANGE_VALUES:
      return contact_objectSpread(contact_objectSpread({}, state), {}, contact_defineProperty({}, action.key, action.value));

    case SEND_MESSAGE:
      // the new state will have the new values (action.value)
      return contact_objectSpread(contact_objectSpread({}, state), {}, {
        nameContact: '',
        emailContact: '',
        objectContact: '',
        messageContact: ''
      });

    default:
      return state;
  }
};

/* harmony default export */ const contact = (contact_reducer);
;// CONCATENATED MODULE: ./src/reducers/register.js










function register_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function register_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { register_ownKeys(Object(source), true).forEach(function (key) { register_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { register_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function register_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // set the initial state

var register_initialState = {
  nameRegister: '',
  emailRegister: '',
  passwordRegister: '',
  verifPasswordRegister: '',
  registered: false,
  role: '0'
}; // define the reducer's properties/params

var register_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : register_initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case CHANGE_VALUE_REGISTER:
      return register_objectSpread(register_objectSpread({}, state), {}, register_defineProperty({}, action.key, action.value));

    case REGISTER:
      // the new state will have the new values (action.value)
      return register_objectSpread(register_objectSpread({}, state), {}, {
        nameRegister: '',
        emailRegister: '',
        passwordRegister: '',
        verifPasswordRegister: '',
        registered: true,
        role: '' // checked : false,

      });

    default:
      return state;
  }
};

/* harmony default export */ const reducers_register = (register_reducer);
;// CONCATENATED MODULE: ./src/reducers/foodtruck.js










function foodtruck_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function foodtruck_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { foodtruck_ownKeys(Object(source), true).forEach(function (key) { foodtruck_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { foodtruck_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function foodtruck_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import data from 'src/data';
var foodtruck_initialState = {
  list: [] // search: false,

};

var foodtruck_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : foodtruck_initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'SAVE_FOODTRUCKLIST':
      return foodtruck_objectSpread(foodtruck_objectSpread({}, state), {}, {
        list: action.foodtruck // search: true,

      });

    default:
      return state;
  }
};

/* harmony default export */ const foodtruck = (foodtruck_reducer);
;// CONCATENATED MODULE: ./src/reducers/profil.js










function profil_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function profil_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profil_ownKeys(Object(source), true).forEach(function (key) { profil_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profil_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profil_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // const data = JSON.parse(sessionStorage.getItem('key'));
// const informations = data.data;
// const informationsFoodtruck = informations.user_foodtruck;
// set the initial state

var profil_initialState = {
  nicknameProfil: '',
  emailProfil: '',
  firstnameProfil: '',
  lastnameProfil: '',
  streetProfil: '',
  cityProfil: '',
  postalCodeProfil: '',
  warning: false,
  modify: false
}; // define the reducer's properties/params

var profil_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : profil_initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case TYPE_VALUES:
      return profil_objectSpread(profil_objectSpread({}, state), {}, profil_defineProperty({}, action.key, action.value));

    case UPDATE_INFORMATIONS:
      var data = JSON.parse(sessionStorage.getItem('key'));
      var informations = data.data;
      var informationsFoodtruck = informations.user_foodtruck; // console.log(informationsFoodtruck);
      // the new state will have the new values (action.value)

      return profil_objectSpread(profil_objectSpread({}, state), {}, {
        nicknameProfil: informations.nickname,
        emailProfil: informations.email,
        firstnameProfil: informations.firstname,
        lastnameProfil: informations.lastname,
        streetProfil: informationsFoodtruck.street,
        cityProfil: informationsFoodtruck.city,
        postalCodeProfil: informationsFoodtruck.postal_code,
        warning: true
      });

    case SHOW_MODIFY_INFORMATIONS:
      // the new state will have the new values (action.value)
      return profil_objectSpread(profil_objectSpread({}, state), {}, {
        modify: true
      });

    case HIDE_MODIFY_INFORMATIONS:
      // the new state will have the new values (action.value)
      return profil_objectSpread(profil_objectSpread({}, state), {}, {
        modify: false
      });

    default:
      return state;
  }
};

/* harmony default export */ const profil = (profil_reducer);
;// CONCATENATED MODULE: ./src/reducers/index.js





 // We pass to the combineReducers an object which has the shape of the desired state
// here, we'll have compartment (property) trucks and user in the state
// we associate to each compartment the reducer that handles this part of the state

var rootReducer = (0,redux/* combineReducers */.UY)({
  user: user,
  contact: contact,
  register: reducers_register,
  foodtruck: foodtruck,
  profil: profil
});
/* harmony default export */ const reducers = (rootReducer);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/actions/foodtruck.js
/* eslint-disable import/prefer-default-export */
var FETCH_FOODTRUCK = 'FETCH_FOODTRUCK';
var fetchFoodtruck = function fetchFoodtruck() {
  return {
    type: FETCH_FOODTRUCK
  };
};
;// CONCATENATED MODULE: ./src/middlewares/ajax.js






 // set the baseURl

var api = axios_default().create({
  baseURL: 'http://ec2-54-174-150-162.compute-1.amazonaws.com' // baseURL: 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public',

});

var ajax = function ajax(store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        // Define every params for the LOG_USER's case
        case TRY_LOGIN:
          var state = store.getState(); // API request that will add itself to the baseURL with username/pass params

          api.post('/api/login_check', {
            username: state.user.email,
            password: state.user.password
          }) // What we do if the request worked
          .then(function (response) {
            // if the connection is successful, we save the token
            // https://github.com/axios/axios#custom-instance-defaults
            console.log(response.data);
            sessionStorage.setItem('key', JSON.stringify(response.data));
            api.defaults.headers.common.Authorization = "bearer ".concat(response.data.token);
            store.dispatch({
              type: LOGIN,
              nickname: response.data.data.nickname,
              token: response.data.token
            });
          })["catch"](function (error) {
            console.error(error);
            alert('Authentification échouée');
          });
          next(action);
          break;

        case SEND_MESSAGE:
          var stateContact = store.getState();
          api.post('/api/v1/contact', {
            nom: stateContact.contact.nameContact,
            email: stateContact.contact.emailContact,
            objet: stateContact.contact.objectContact,
            message: stateContact.contact.messageContact
          }) // What we do if the request worked
          .then(function (response) {
            console.log(response);
          });
          next(action);
          break;

        case 'FETCH_FOODTRUCK_ON_LOAD':
          var stateFoodtruckOnLoad = store.getState();
          api.get("/api/v1/search?lat=".concat(stateFoodtruckOnLoad.user.lat, "&lon=").concat(stateFoodtruckOnLoad.user.lon, "&km=500")).then(function (response) {
            if (!response.data.length) {
              console.log();
              'Aucun foodtruck';
              return;
            }

            console.log(response);
            store.dispatch({
              type: 'SAVE_FOODTRUCKLIST',
              foodtruck: response.data
            });
          });
          break;

        case FETCH_FOODTRUCK:
          // const stateFoodtruck = store.getState();
          var stateFoodtruck = store.getState();
          var address = stateFoodtruck.user.address;
          axios_default().get("https://api-adresse.data.gouv.fr/search/?q=".concat(address)).then(function (response) {
            if (!response.data.features.length) {
              console.log();
              'Votre adresse ne correspond à aucune connue.';
              return;
            }

            console.log(response);
            var lon = response.data.features[0].geometry.coordinates[0];
            var lat = response.data.features[0].geometry.coordinates[1];
            api.get("/api/v1/search?lat=".concat(lat, "&lon=").concat(lon, "&km=10")).then(function (response) {
              if (!response.data.length) {
                console.log();
                'Aucun foodtruck';
                return;
              }

              console.log(response);
              store.dispatch({
                type: 'SAVE_FOODTRUCKLIST',
                foodtruck: response.data,
                search: true
              });
            });
          });
          next(action);
          break;

        case REGISTER:
          var stateRegister = store.getState();
          api.post('/register', {
            nickname: stateRegister.register.nameRegister,
            email: stateRegister.register.emailRegister,
            plainPassword: stateRegister.register.passwordRegister,
            roles: stateRegister.register.role
          }).then(function (response) {
            console.log(response);
          });
          next(action);

        default:
          next(action);
          break;

        case UPDATE_INFORMATIONS:
          var stateProfil = store.getState();
          var data = JSON.parse(sessionStorage.getItem('key'));
          var id = data.data.id;
          ;
          console.log(id);
          api.patch("api/v1/users/".concat(id), {
            nickname: stateProfil.profil.nicknameProfil,
            email: stateProfil.profil.emailProfil,
            firstname: stateProfil.profil.firstnameProfil,
            lastname: stateProfil.profil.lastnameProfil
          }).then(function (response) {
            console.log(response);
          });
          next(action);
          break;
      }
    };
  };
};

/* harmony default export */ const middlewares_ajax = (ajax);
;// CONCATENATED MODULE: ./src/store/index.js

 // import middleware

 // We group redux devtools and our middlewares

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux/* compose */.qC;
var enhancers = composeEnhancers((0,redux/* applyMiddleware */.md)(middlewares_ajax)); // we create the store to which we pass the reducer and middleware (with the devtool)

var store = (0,redux/* createStore */.MT)(reducers, enhancers);
/* harmony default export */ const src_store = (store);
;// CONCATENATED MODULE: ./src/index.js
/**
 * Import : NPM (Yarn)
 */



/**
 * Import : local
 */



/**
 * REACT element 
 */



var rootReactElement = /*#__PURE__*/(0,jsx_runtime.jsx)(es/* Provider */.zt, {
  store: src_store,
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* BrowserRouter */.VK, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_App, {})
  })
});

var target = document.getElementById('root');
react_dom.render(rootReactElement, target);

/***/ }),

/***/ 9193:
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [676], () => (__webpack_exec__(9193), __webpack_exec__(1620)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
