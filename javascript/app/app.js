/**
 * Created with JetBrains WebStorm.
 * User: mpa
 * Date: 07.01.13
 * Time: 22:23
 * To change this template use File | Settings | File Templates.
 */

/**
 * The Service module
 */
angular.module('baseapp.service', []);

/**
 * The Directive module
 */
angular.module('baseapp.directive', []).
    directive('i18n', function () {
        return {
            restrict:'A',
            link:function postLink(scope, iElement, iAttrs) {
                iElement.i18n();
            }
        }
    });

/**
 * The Factory module
 */
angular.module('baseapp.factory', []);

/**
 * The Filter module
 */
angular.module('baseapp.filter', []);

/**
 * The main module
 */
angular.module('baseapp', ['baseapp.service', 'baseapp.directive', 'baseapp.factory', 'baseapp.filter']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/home',{templateUrl:'partials/home.html'}).
            when('/form', {templateUrl:'partials/form.html'}).
            otherwise({redirectTo:'/home'});
    }).
    run(function () {
        $.i18n.init({
            ns:{namespaces:['messages'], defaultNs:'messages'},
            debug:true,
            getAsync:false,
            selectorAttr:'i18n'
        }, function () {

        });
    });

