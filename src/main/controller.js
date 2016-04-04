import angular from 'angular'
import forEach from 'lodash/forEach'
import find from 'lodash/find'
import './style.less'
export default function() {
    var vm = this;
    vm.list = [{
        id: 0,
        title: "All ideas",
        selected: "false"
    }, {
        id: 1,
        title: "idea 1",
        selected: "false"
    }, {
        id: 2,
        title: "idea 2",
        selected: "false"
    }, {
        id: 3,
        title: "idea 3",
        selected: "false"
    }, {
        id: 4,
        title: "foo",
        selected: "false"
    }, {
        id: 5,
        title: "bar",
        selected: "false"
    }, {
        id: 6,
        title: "baz",
        selected: "false"
    }, {
        id: 7,
        title: "bazzzzz",
        selected: "false"
    }, {
        id: 8,
        title: "footer",
        selected: "false"
    }];
}
