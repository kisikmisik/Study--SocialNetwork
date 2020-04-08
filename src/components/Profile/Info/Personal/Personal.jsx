import React from 'react';
import s from './Personal.module.css';

const Personal = () => {
    return (
        <div className={s.personal}>
            <h2 className={s.name}>Vladimir N.</h2>
            <table className={s.table}>
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
        </div>
    )
}

export default Personal;