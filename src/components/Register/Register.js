import React from 'react';

const Register = ({onRouteChange}) => {
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="sign_up">Name</label>
                            <input className="br2 pa2 input-reset ba bg-transparent hover-bg-black-30 hover-white w-100"
                                   type="text" name="name" id="name"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                className="br2 b pa2 input-reset ba bg-transparent hover-bg-black-30 hover-white w-100"
                                type="password" name="password" id="password"/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                               onClick={() => onRouteChange('home')}
                               type="submit" value="Register"/>
                    </div>
                </form>
            </main>
        </article>
    );
}

export default Register;