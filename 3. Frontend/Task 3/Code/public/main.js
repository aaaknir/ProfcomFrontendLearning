(function () {
    'use strict';

    const Block = window.Block;
    const Form = window.Form;
    const UserService = window.UserService;
    const userService = new UserService();
    const Scoreboard = window.Scoreboard;

    const app = new Block(document.getElementById('application'));
    const nav = {
        auth: new Block(document.getElementById('auth')),
        signup: new Block(document.getElementById('signup')),
        scores: new Block(document.getElementById('scores')),
    };
    const sections = {
        auth: new Block.Create('section', ['auth-section']),
        signup: new Block.Create('section', ['signup-section']),
        scores: new Block.Create('section', ['scores-section']),
        hide() {
            this.auth.hide();
            this.signup.hide();
            this.scores.hide();
        },
    };

    sections.hide();

    app
        .append(sections.auth)
        .append(sections.signup)
        .append(sections.scores);

    let header;

    const signupForm = new Form([
        {
            classes: [],
            attrs: {
                type: 'email',
                placeholder: 'Введите ваш e-mail',
                required: 'required',
                name: 'email',
            }
        },
        {
            classes: [],
            attrs: {
                type: 'text',
                placeholder: 'Введите ваше возраст',
                required: 'required',
                name: 'age',
            }
        },
        {
            classes: [],
            attrs: {
                type: 'submit',
                value: 'Зарегистрироваться',
            }
        },
    ]);

    header = Block.Create('h2');
    header.setText('Зарегистрируйтесь');
    sections.signup.append(header).append(signupForm);

    const authForm = new Form([
        {
            classes: [],
            attrs: {
                type: 'email',
                placeholder: 'Ваш e-mail',
                required: 'required',
                name: 'email',
            }
        },
        {
            classes: [],
            attrs: {
                type: 'password',
                placeholder: 'Ваш пароль',
                required: 'required',
                name: 'password',
            }
        },
        {
            classes: [],
            attrs: {
                type: 'submit',
                value: 'Log in',
            }
        },
    ]);
    header = Block.Create('h2');
    header.setText('Войдите на сайт');
    sections.auth.append(header).append(authForm);

    const scores = new Scoreboard();
    header = Block.Create('h2');
    header.setText('Таблица лидеров');
    sections.scores.append(header).append(scores);

    nav.scores.on('click', function () {
        sections.hide();
        userService.loadUsersList(function (err, users) {
            if (err) {
                return alert('Some error ${err.statusCode}: ${err.message}');
            }
            scores.update(users);
            sections.scores.show();
        });
    });

    nav.signup.on('click', function () {
        sections.hide();
        if (userService.isLoggedIn()) {
            return alert('Вы уже зарегистрированы!');
        }
        sections.signup.show();
    });

    nav.auth.on('click', function () {
        sections.hide();
        if (userService.isLoggedIn()) {
            return alert('Вы уже вошли!');
        }
        sections.auth.show();
    });

    signupForm.onSubmit(function (formdata) {
       const user = {
           email: formdata.email,
           password: formdata.password,
           age: formdata.age,
       };
       console.log('sign up', user);
    });

    authForm.onSubmit(function (formdata) {
        const user = {
            email: formdata.email,
            password: formdata.password,
        };
        console.log('auth', user);
    });
})();
   /* userService.auth('username', '1@2.ru', function (err, response) {
        console.log(err, response);
    });

})();

    const Form = window.Form;
    const Scoreboard = window.Scoreboard;
    const Profile = window.Profile;
    const loginFields = window.loginFields;
    const signupFields = window.signupFields;

const sections = [
    ['login', 'Окно логина'],
    ['profile', 'Мой профиль'],
    ['about', 'Об игре'],
];

    const nav = new Block(document.getElementById('navigation'));
    const loginForm = new Block(document.getElementById('login-form'));
    const usernameDiv = new Block(document.getElementById('username-div'));
    const emailDiv = new Block(document.getElementById('email-div'));
    const countDiv = new Block(document.getElementById('count-div'));

    application
        .append(nav)
        .append(loginForm)
        .append(usernameDiv)
        .append(emailDiv)
        .append(countDiv)


for (let section of sections) {
    const b = Block.Create('input', [], {type: 'button', 'data-section': section[0]});
    nav.append(b);
}

const liveSectionsCollection = document.getElementsByTagName('section');
nav.addEventListener ('click', function (event) {
    const sectionId = event.target.getAttribute('data-section');
    const liveSectionsArray = Array.from(liveSectionsCollection);
    if (sectionId === 'profile') {
        liveSectionsArray.forEach(function (sectionElement) {
            sectionElement.hidden = true;
        });
    }
    whoami (function ()) {}
    return;
});

loginForm.addEventListener ('submit', function (event) {
    event.preventDefault();
    console.log (loginForm.elements);
    const email = loginForm.elements['email'].value;
    const username = loginForm.elements['username'].value;
    auth (username, email, function (err, resp) {
        if (err) {
            alert ('AUTH error: ${err.status}');
        }
        loginForm.reset();
    });
})*/
    /*const title = Block.Create('a', {}, ['application-header'], 'Frontend-sample application');
    const sections = {
        menu: Block.Create('section', {}, ['menu-section']),
        login: Block.Create('section', {}, ['login-section']),
        signup: Block.Create('section', {}, ['signup-section']),
        scores: Block.Create('section', {}, ['scores-section']),
        profile: Block.Create('section', {}, ['profile-section']),
        hide() {
            this.menu.hide();
            this.login.hide();
            this.signup.hide();
            this.scores.hide();
            this.profile.hide();
        },
    };
    sections.hide();
    app
        .append(title)
        .append(sections.menu)
        .append(sections.login)
        .append(sections.signup)
        .append(sections.scores)
        .append(sections.profile);

    function openLogin() {
        if (!sections.login.ready) {
            sections.login.loginform = new Form(loginFields);
            sections.login.loginform.onSubmit(function (formdata) {
                userService.login(formdata.email, formdata.password, function (err, resp) {
                    if (err) {
                        alert(`Some error ${err.status}: ${err.responseText}`);
                        return;
                    }

                    sections.login.loginform.reset();
                    userService.getData(function (err, resp) {
                        if (err) {
                            return;
                        }
                        openMenu();
                    }, true);
                });
            });
            sections.login
                .append(Block.Create('h2', {}, [], 'Войдите'))
                .append(sections.login.loginform);
            sections.login.ready = true;
        }
        sections.hide();
        if (userService.isLoggedIn()) {
            return openMenu();
        }
        sections.login.show();
    }

    function openSignup() {
        if (!sections.signup.ready) {
            sections.signup.signupform = new Form(signupFields);
            sections.signup.signupform.onSubmit(function (formdata) {
                userService.signup(formdata.email, formdata.password, +formdata.age, function (err, resp) {
                    if (err) {
                        alert(`Some error ${err.status}: ${err.responseText}`);
                        return;
                    }

                    sections.signup.signupform.reset();
                    openMenu();
                });
            });
            sections.signup
                .append(Block.Create('h2', {}, [], 'Зарегистрируйтесь'))
                .append(sections.signup.signupform);
            sections.signup.ready = true;
        }
        sections.hide();
        if (userService.isLoggedIn()) {
            return openMenu();
        }
        sections.signup.show();
    }

    function openScores() {
        if (!sections.scores.ready) {
            sections.scores.scoreboard = new Scoreboard();
            sections.scores
                .append(Block.Create('h2', {}, [], 'Список лидеров'))
                .append(sections.scores.scoreboard);
            sections.scores.ready = true;
        }
        sections.hide();
        userService.loadUsersList(function (err, users) {
            if (err) {
                alert(`Some error ${err.status}: ${err.responseText}`);
                return openMenu();
            }

            sections.scores.scoreboard.update(users);
            sections.scores.show();
        }, true);
    }

    function openProfile() {
        if (!sections.profile.ready) {
            sections.profile.profile = new Profile();
            sections.profile
                .append(Block.Create('h2', {}, [], 'Мой профиль'))
                .append(sections.profile.profile);
            sections.profile.ready = true;
        }
        sections.hide();
        if (userService.isLoggedIn()) {
            userService.getData(function (err, user) {
                if (err) {
                    alert(`Some error ${err.status}: ${err.responseText}`);
                    return openMenu();
                }

                sections.profile.profile.update(user);
                sections.profile.show();
            }, true);
            return;
        }
        return openMenu();
    }

    function openMenu() {
        if (!sections.menu.ready) {
            sections.menu.items = {
                login: Block.Create('a', {'data-section': 'login'}, [], 'Открыть форму входа'),
                signup: Block.Create('a', {'data-section': 'signup'}, [], 'Открыть форму регистрации'),
                scores: Block.Create('a', {'data-section': 'scores'}, [], 'Открыть таблицу лидеров'),
                profile: Block.Create('a', {'data-section': 'profile'}, [], 'Посмотреть мой профиль'),
            };
            sections.menu.on('click', function (event) {
                event.preventDefault();
                const target = event.target;
                const section = target.getAttribute('data-section');
                switch (section) {
                    case 'login':
                        openLogin();
                        break;
                    case 'signup':
                        openSignup();
                        break;
                    case 'scores':
                        openScores();
                        break;
                    case 'profile':
                        openProfile();
                        break;
                }
            });
            sections.menu
                .append(Block.Create('h2', {}, [], 'Меню'))
                .append(sections.menu.items.login)
                .append(sections.menu.items.signup)
                .append(sections.menu.items.scores)
                .append(sections.menu.items.profile);
            sections.menu.ready = true;
        }
        sections.hide();
        if (userService.isLoggedIn()) {
            sections.menu.items.login.hide();
            sections.menu.items.signup.hide();
            sections.menu.items.scores.show();
            sections.menu.items.profile.show();
        } else {
            sections.menu.items.login.show();
            sections.menu.items.signup.show();
            sections.menu.items.scores.show();
            sections.menu.items.profile.hide();
        }
        sections.menu.show();
    }
    title.on('click', openMenu);
    openMenu();

    userService.getData(function (err, resp) {
        if (err) {
            return;
        }
        openMenu();
    }, true);
})();*/