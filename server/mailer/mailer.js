(function () {
    'use strict';

    var Mailer = React.createClass({displayName: 'Mailer',
        render: function () {
            var createItem = function (itemText) {
                return React.DOM.li(null, itemText);
            };
            return React.DOM.ul(null, this.props.items.map(createItem));
        }
    });

    var MailerApp = React.createClass({displayName: 'MailerApp',
        getInitialState: function () {
            return {items: [], text: ''};
        },
        onChange: function (e) {
            this.setState({text: e.target.value});
        },
        handleSubmit: function (e) {
            e.preventDefault();
            var nextItems = this.state.items.concat([this.state.text]);
            var nextText = '';
            this.setState({items: nextItems, text: nextText});
        },
        render: function () {
            return (
                React.DOM.div(null,

                    React.DOM.h3(null, "MAILER"),

                    Mailer({items: this.state.items}),

                    React.DOM.form({onSubmit: this.handleSubmit},
                        React.DOM.input({onChange: this.onChange, value: this.state.text}),
                        React.DOM.button(null, 'Add #' + (this.state.items.length + 1))
                    )
                )
                );
        }
    });

    React.renderComponent(MailerApp(null), document.body);

})();