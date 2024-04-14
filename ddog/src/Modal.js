import { Form } from "./Form"


export default function Modal({ setTableData }) {
    return (
        <>
            <div className="modal fade" id="monitormodal" tabIndex="-1" aria-labelledby="monitorModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="monitorModalLabel">Create Monitor</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form setTableData={setTableData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}