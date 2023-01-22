import React, { useState } from "react";
import { Link } from "react-router-dom";

import css from "./profile.module.css";
import { Image, Button } from "react-bootstrap";

import { HiUserCircle, HiMail } from "react-icons/hi";
import {
	MdLocationPin,
	MdLock,
	MdLocalPhone,
	MdPersonPinCircle,
} from "react-icons/md";
import { TbGenderBigender } from "react-icons/tb";

import PassModal from "../../components/Common/ChangePasswordmodal";

import Layout from "../../components/layouts/withSearchbar";
const Profile = () => {
	const [PasswordModal, setPasswordModal] = useState(false);
	const isLogin = JSON.parse(localStorage.getItem("isLogin"));
	const user = JSON.parse(localStorage.getItem("userData")).find(
		(obj) => obj.username === isLogin.username
	);
	// console.log("user data", user);

	return (
		<Layout className='bg-tertiary'>
			<div className=''>
				<div className={css.MaxWidth}>
					<div className={css.Card}>
						<div className='d-flex'>
							<div className={css.CardLeft}>
								<h1 className='mb-4 text-black'>
									<strong>Personal Info</strong>
								</h1>
								<div className='d-flex gap-3 align-items-center'>
									<HiUserCircle fontSize={36} />
									<div className=''>
										<strong className={css.ListTitle}>{user.fullname}</strong>
										<small>Full name</small>
									</div>
								</div>
								<div className='d-flex gap-3 align-items-center'>
									<HiMail fontSize={36} />
									<div className=''>
										<strong className={css.ListTitle}>{user.email}</strong>
										<small>Email</small>
									</div>
								</div>
								<div className='d-flex gap-3 align-items-center'>
									<MdLock fontSize={36} />
									<div className=''>
										<strong
											className={css.ListTitleTrigger}
											onClick={() => setPasswordModal(true)}
										>
											Change Password
										</strong>
										<small>Password</small>
									</div>
								</div>
								<div className='d-flex gap-3 align-items-center'>
									<MdPersonPinCircle fontSize={36} />
									<div className=''>
										<strong className={css.ListTitle}>{user.role}</strong>
										<small>Status</small>
									</div>
								</div>
								<div className='d-flex gap-3 align-items-center'>
									<TbGenderBigender fontSize={36} />
									<div className=''>
										<strong className={css.ListTitle}>{user.gender}</strong>
										<small>Gender</small>
									</div>
								</div>
								<div className='d-flex gap-3 align-items-center'>
									<MdLocalPhone fontSize={36} />
									<div className=''>
										<strong className={css.ListTitle}>{user.phone}</strong>
										<small>Mobile Phone</small>
									</div>
								</div>
								<div className='d-flex gap-3 align-items-center'>
									<MdLocationPin fontSize={36} />
									<div className=''>
										<strong className={css.ListTitle}>{user.address}</strong>
										<small>Address</small>
									</div>
								</div>
							</div>
							<div className={css.CardRight}>
								<div className={css.WrapperCardImage}>
									<Image
										className={css.CardImage}
										src={"https://github.com/hyujisf.png"}
									/>
									{/* <Link to='/'>back to home</Link> */}
								</div>
								<Button className={"btn btn-primary w-100 py-3 fw-bold fs-5"}>
									Change Photo Profil
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<PassModal
				show={PasswordModal}
				// gotoregister={gotoRegistration}
				onHide={() => setPasswordModal(false)}
			/>
		</Layout>
	);
};

export default Profile;
