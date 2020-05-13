import React, { useState, useEffect } from 'react';
import firebase from 'firebase'
import { startFirebaseUI, createUser } from '../firebase';


function LandingPage() {
  useEffect(() => {
    startFirebaseUI('#firebaseui-auth-container')
    createUser("greenivoo@gmail.com", "password")
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
        </div>
        <div className="col-4 text-center">
          <div id="firebaseui-auth-container"></div>
        </div>
        <div className="col-4">
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
