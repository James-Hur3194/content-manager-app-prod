

import Layout from "components/Layout"
import ResourceForm from "components/ResourceForm"
import axios from "axios";
import { useRouter } from "next/router";

const ResourceCreate = () => {

    const router = useRouter();

    const createResource = formData => {
        //alert(JSON.stringify(form));
        // fetch("/api/resources", {
        //     body: JSON.stringify(form),
        //     headers: {"Content-Type": "application/json"},
        //     method: "POST"
        // })
        axios.post("/api/resources", formData)
            .then((res) => router.push("/"))
            .catch((error) => alert(error?.response?.data));
    }

    return (
        <Layout>
        <div className="container">
            <div className="columns">
                <div className="column is-8 is-offset-2">
                    <ResourceForm 
                    onFormSubmit={createResource}

                    />
                </div>

            </div>
        </div>

        </Layout>
    )
}

export default ResourceCreate;