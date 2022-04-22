import { NewAccountForm, Footer, Header, Title } from "components";

const NewAccountPage = () => {
    return (
        <>
            <Header />
            <Title title="Create new account"/>
            <NewAccountForm />
            <Footer />
        </>
    )
};

export default NewAccountPage;