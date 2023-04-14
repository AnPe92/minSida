import { GetServerSideProps } from 'next';
import Login from './Login';

const Header = () => {
    return (
        <div>
            <h1>Anton Persson</h1>
            <Login />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    return {
        props: {

        }
    }
}

export default Header