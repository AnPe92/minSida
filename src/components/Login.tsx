import { GetServerSideProps } from 'next';

const Login = () => {
    return (
        <div>
            Enter
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props: {

        }
    }
}

export default Login