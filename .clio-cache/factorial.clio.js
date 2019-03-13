module.exports = async function(scope, builtins, file) {
    var ws_connections = [];
    builtins.define_function((function(scope) {
        var func = builtins.lazy(async function(n) {
            var scope = Object.assign({}, func.frozenscope);
            var args_obj = {};
            var _arguments = arguments;
            ['n'].forEach(function(arg, index) {
                scope[arg] = _arguments[index]
            });
            if (await builtins.funcall([await builtins.funcall([await builtins.funcall(['n'], [scope], builtins.get_symbol, file, {
                    index: 21,
                    fn: '<get-symbol>'
                })], [new builtins.Decimal('1')], builtins.lte, file, {
                    index: 21,
                    fn: 'builtins.lte'
                })], [], builtins.bool, file, {
                    index: 18,
                    fn: '<conditional>'
                })) {
                return await builtins.funcall(['n'], [scope], builtins.get_symbol, file, {
                    index: 29,
                    fn: '<get-symbol>'
                })
            } else {
                return builtins.funcall([await builtins.funcall(['n'], [scope], builtins.get_symbol, file, {
                    index: 44,
                    fn: '<get-symbol>'
                })], [await (async function(__data) {
                    var fn = async function(__data) {
                        return await builtins.funcall([...__data], [], await builtins.funcall(['factorial'], [scope], builtins.get_symbol, file, {
                            index: 58,
                            fn: '<get-symbol>'
                        }), file, {
                            index: 58,
                            fn: 'factorial'
                        })
                    }
                    if (__data[0].is_reactive) {
                        return __data[0].set_listener(function(n) {
                            return fn([n, ...__data.slice(1)])
                        })
                    } else {
                        return await fn(__data)
                    }
                })([builtins.funcall([await builtins.funcall(['n'], [scope], builtins.get_symbol, file, {
                    index: 49,
                    fn: '<get-symbol>'
                })], [new builtins.Decimal('1')], builtins.dec, file, {
                    index: 49,
                    fn: 'builtins.dec'
                })])], builtins.mul, file, {
                    index: 44,
                    fn: 'builtins.mul'
                })
            }
        }, true);
        func.frozenscope = Object.assign({}, scope);
        func.frozenscope['factorial'] = func;
        func.frozenscope['recall'] = func;
        return func;
    })(scope), 'factorial', scope);
    await (async function(__data) {
        var fn = async function(__data) {
            return await builtins.funcall([await builtins.funcall([...__data], [], await builtins.funcall(['factorial'], [scope], builtins.get_symbol, file, {
                index: 76,
                fn: '<get-symbol>'
            }), file, {
                index: 76,
                fn: 'factorial'
            })], [], await builtins.funcall(['print'], [scope], builtins.get_symbol, file, {
                index: 89,
                fn: '<get-symbol>'
            }), file, {
                index: 89,
                fn: 'print'
            })
        }
        if (__data[0].is_reactive) {
            return __data[0].set_listener(function(n) {
                return fn([n, ...__data.slice(1)])
            })
        } else {
            return await fn(__data)
        }
    })([new builtins.Decimal('10')]);
    for (var server in ws_connections) {
        if (ws_connections.hasOwnProperty(server)) {
            if (ws_connections[server].emitters == {}) {
                ws_connections[server].socket.close()
            }
        }
    }
    return scope;
};