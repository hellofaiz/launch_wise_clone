import React from 'react'

function MiniFooter() {
    return (
        <div style={{ width: '100vw', height: '10vh', backgroundColor: '#2B2F33', color: '#C2C2C2', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{
                fontFamily: "Montserrat",
                fontSize: "1rem",
                fontWeight: "700",
                textAlign: "center"
            }}>
                © 2024 - Safe Ledger Private Limited. All rights reserved.
            </p>
        </div >
    )
}

export default MiniFooter