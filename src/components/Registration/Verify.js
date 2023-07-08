import React, {useState} from 'react';
import axios from "axios"


const Verify = () => {

    const [verify, setVerify ] = useState(
        {
            email:"",
            key:""
        }
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://excoin.onrender.com/account/verify-email/', verify)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <>
            <div className="block_code">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={verify.key}
                        onChange={
                            (e) => setVerify({...verify, key: e.target.value})}
                        name="key"
                    />
                    <input
                        onSubmit={handleSubmit}
                        type="submit"
                    />
                </form>
            </div>
        </>
    );
};

export default Verify;