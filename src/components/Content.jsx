import React from 'react';

const Content = () => {
    return (
        <section className="content">
            <h2 className="visually-hidden">User info and posts</h2>
            <div className="content__image-wrapper">
                <img className="content__wallpaper"
                    src="https://images8.alphacoders.com/102/1026968.jpg"
                    alt="wallpaper" height="400" />
            </div>
            <section className="info">
                <img src="https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg"
                    alt="profile picture" class="info__avatar" />
                <h2 className="info__name">Vladimir N.</h2>
                <table className="info__personal">
                    <tr>
                        <td>Date of birth:</td>
                        <td>21 January</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>Cracow</td>
                    </tr>
                    <tr>
                        <td>Education:</td>
                        <td>Sharaga</td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td>https://github.com/kisikmisik</td>
                    </tr>
                </table>
            </section>

            <section className="posts">
                <h2 className="posts__header">My posts</h2>
                <form className="posts__new">
                    <input type="text" placeholder="What's new?" />
                    <button type="submit">Send</button>
                </form>

                <div className="posts__old">
                    <div className="post__item">Post 1</div>
                    <div className="post__item">Post 2</div>
                </div>
            </section>

        </section>
    );
}

export default Content;
