import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">محصولات</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">نام محصول</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">قیمت</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">تعداد</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">حذف</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">مجموع</p>
                </div>
            </div>
        </div>
    )
}
