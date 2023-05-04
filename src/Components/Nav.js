import React from 'react';
import '../css/nav.css'
import '../css/bulletin.css';
import '../css/post.css';
import { getDatabase, ref, child, get} from "firebase/database";
// import { firebaseDatabase, firebasePosts} from '../firebase';

export default function Nav({setShowPost, setPostTitle, setPosts, posts}){

    const showFullPost = (title) =>{
        setShowPost(true)
        setPostTitle(title)
    }

    const showAllPosts = () => {
        setPosts([]);
        const dbRef = ref(getDatabase());
        get(child(dbRef, `Posts`)).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((snap) => {
                    // posts.push() here is no good, you need to do mutable updates instead of mutating the state
                    // also, use the callback setState when the next state depends on the previous
                    setPosts((posts) => [...posts, snap.val()])
                  })
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }


    const searchForPost = (title) => {
        setPosts([]);
            const dbRef = ref(getDatabase());
            get(child(dbRef, `Posts/${title}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach((snap) => {
                        // posts.push() here is no good, you need to do mutable updates instead of mutating the state
                        // also, use the callback setState when the next state depends on the previous
                        setPosts((posts) => [...posts, snap.val()])
                      })
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        // }
    
        // make sure you clean up the subscription to prevent memory leaks
        // return () => {
        //     callPost();
        //     console.log(title);
        // }

        console.log(posts);
    
    }


    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         console.log(snapshot.val());
    //     } else {
    //         console.log("No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // });

    // useEffect(() => {
    //     const unsubscribe = firebaseDatabase
    //       .ref('Posts/' + title )
    //       .limitToFirst(6)
    //       .on("value", (snapshot) => {
    //         snapshot.forEach((snap) => {
    //           // posts.push() here is no good, you need to do mutable updates instead of mutating the state
    //           // also, use the callback setState when the next state depends on the previous
    //           setPosts((posts) => [...posts, snap.val()])
    //         })
    //       })
    
    //     // make sure you clean up the subscription to prevent memory leaks
    //     return () => {
    //       unsubscribe()
    //     }
    //   }, [])

    return (
        <div className="col nav-full col-lg-2 ">
            <div className="row nav-header">
                <div className="col nav-header">
                    <p>Bulletin Board</p>
                </div>
                <div>
                <button className="btn btn-outline-warning post-button" type="button" onClick={() => showAllPosts()}>
                    DISPLAY ALL POSTS
                </button>
                </div>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        CREATE A POST
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <button className="post-button" onClick={() => showFullPost('LOST PET')} >                      
                            <h5>Lost Pet</h5>
                        </button>
                        <button className="post-button" onClick={() => showFullPost('LESSONS')}>                      
                            <h5>Lessons</h5>
                        </button>
                        <button className="post-button" onClick={() => showFullPost('CAR POOL')} >                      
                            <h5>Car Pool</h5>
                        </button>
                        <button className="post-button" onClick={() => showFullPost('JOB POSTING')}>                      
                            <h5>Job Posting</h5>
                        </button>
                        <button className="post-button" onClick={() => showFullPost('SHIFT COVERAGE')} >                      
                            <h5>Shift Coverage</h5>
                        </button>
                        <button className="post-button" onClick={() => showFullPost('SELLING-WANTED')}>                      
                            <h5>Selling-Wanted</h5>
                        </button>
                        <button className="post-button" onClick={() => showFullPost('VOLUNTEERS')} >                      
                            <h5>Volunteers</h5>
                        </button>
                        <button className="post-button" onClick={() => showFullPost('PARTY')}>                      
                            <h5>Party</h5>
                        </button>
                        <button className="post-button" onClick={() => showFullPost('LOOKING FOR FRIENDS')} >                      
                            <h5>Looking For Friends</h5>
                        </button>
                        <button className="post-button" onClick={() => showFullPost('PLAY GAMES')}>                      
                            <h5>Play Games</h5>
                        </button>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        SEARCH FOR A POST
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <button className="post-button" onClick={() => searchForPost('LostPet')} >                      
                            <h5>Lost Pet</h5>
                        </button>
                        <button className="post-button" onClick={() => searchForPost('Lessons')}>                      
                            <h5>Lessons</h5>
                        </button>
                        <button className="post-button" onClick={() => searchForPost('CarPool')} >                      
                            <h5>Car Pool</h5>
                        </button>
                        <button className="post-button" onClick={() => searchForPost('JobPosting')}>                      
                            <h5>Job Posting</h5>
                        </button>
                        <button className="post-button" onClick={() => searchForPost('ShiftCoverage')} >                      
                            <h5>Shift Coverage</h5>
                        </button>
                        <button className="post-button" onClick={() => searchForPost('SellWant')}>                      
                            <h5>Selling/Wanted</h5>
                        </button>
                        <button className="post-button" onClick={() => searchForPost('Volunteers')} >                      
                            <h5>Volunteers</h5>
                        </button>
                        <button className="post-button" onClick={() => searchForPost('Party')}>                      
                            <h5>Party</h5>
                        </button>
                        <button className="post-button" onClick={() => searchForPost('LookingForFriends')} >                      
                            <h5>Looking For Friends</h5>
                        </button>
                        <button className="post-button" onClick={() => searchForPost('PlayGames')}>                      
                            <h5>Play Games</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};





