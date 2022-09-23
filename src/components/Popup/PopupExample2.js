import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './Modal2.css'

export const PopupExample2 = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="button" onClick={() => setOpen(true)}>
                Open big modal
            </button>

            <Modal open={open} onClose={() => setOpen(false)} classNames={{ modal: 'customModal' }} >
                <h1 className='modal-title'>Transacción</h1>
                <div style={{ marginLeft: '20px' }}>
                    <PopupContent title={'Monto'} value={'1,00'} />
                    <PopupContent title={'Moneda'} value={'ARS'} />
                    <PopupContent title={'Tipo'} value={'transferencia'} />
                    <PopupContent title={'Estado'} value={'activo'} />
                    <PopupContent title={'IP del cliente'} value={'127.0.0.1'} />
                    <PopupContent title={'Tiempo de vigencia'} value={'24'} />
                    <PopupContent title={'Fecha y hora'} value={'16-03-2022 19:08:42'} />
                    <PopupContent title={'Descripción'} value={'Deposito'} />
                    <PopupContent title={'Agente web'} value={'PostmanRuntime/7.29.0'} />
                    <PopupContent title={'Documento remitente'} value={'30193596033'} />
                    <PopupContent title={'payment_method'} value={'otros'} />
                    <PopupContent title={'ID remitente'} value={'96'} />
                    <PopupContent title={'Tipo de operación'} value={'Débito'} />
                    <PopupContent title={'Nombre del remitente'} value={'Castaneda Flor'} />
                    <PopupContent title={'Documento remitente'} value={'30815236455'} />
                    <PopupContent title={'ID destinatario'} value={'324'} />
                    <PopupContent title={'Documento fuente'} value={'27246320123'} />
                    <PopupContent title={'Nombre del destinatario'} value={'Gonzalez Pedro'} />
                    <PopupContent title={'Documento destinatario'} value={'20265487964'} />
                </div>
                <div className="actions">
                    <button className="button-action-modal" onClick={() => { setOpen(false); }} >
                        Cerrar
                    </button>
                </div>
            </Modal>
        </>
    );
}

const PopupContent = ({ title, value }) => {
    return (
        <div className='content-section-custom'>
            <h2 className='content-title-custom'>{title}:</h2>
            <p className='content-values-custom'>{value}</p>
        </div>
    )
}