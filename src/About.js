import React, { Component } from 'react';
import './App.css';
import president from './images/president_batc.jpg';
import secretary from './images/secertary_batc.jpg';
import treasurer from './images/tresurer_batc.jpg';


function HistoryText(){
    return (


        <div className="history">
            <h2 className=" title is-2"><strong>Our Story</strong></h2>
            <p>In 1997 friends John Doe and Bill Harry competed in their first Triathlon.
                afer a few years in the sport they dcided to form a group with others in the Baltimore
                area that we also insterested in multi-sport events, and in 2003 the Baltimore Area
                Triathlon Club was born.Not only was BATC a training group, but over time turned into
                a soical group as well. The mission of the BATC is to provide tarining and race support to
                all of out memebers. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras eleifend molestie mauris, vel tempus est accumsan eu. Morbi suscipit vulputate velit ac
                hendrerit. Aliquam erat volutpat. Fusce porta mi vitae nunc scelerisque, ac maximus quam tristique.
                Nam auctor, turpis id accumsan ultrices, dui lorem eleifend nulla, id tincidunt risus mi sit amet ex.
                Proin sit amet libero a augue viverra gravida eget nec sem. Duis luctus porta luctus.<br/><br/>
                Suspendisse maximus ante dui, quis fermentum elit luctus in. Sed vulputate non libero quis
                ullamcorper. Nam in ligula elit. Vivamus mollis velit et ipsum tincidunt cursus.Cras
                tempus enim ultricies velit tincidunt dignissim. Ut id viverra enim, a mollis erat. Proin feugiat,
                dolor sit amet interdum mollis, velit lacus condimentum nunc, a rhoncus enim ex vel metus. <br/><br/>
                Nunc orci justo, viverra at lacinia sit amet, molestie nec arcu. Praesent sit amet sollicitudin
                ligula, vitae mollis tellus. Integer lacinia enim fermentum rutrum venenatis. Aenean tristique
                urna vitae orci bibendum pretium. Proin nec felis interdum, tempus dolor ut, ullamcorper metus.
                Donec tempor nisi sed nisi tincidunt consectetur. Pellentesque in viverra ligula. Nulla quis metus
                ut justo suscipit hendrerit. In hac habitasse platea dictumst. Sed vitae ullamcorper libero.</p>
        </div>


    )
}

function StaffBios(){
    return (
        <div className="bio">

            <h2 className="title is-2"><strong>2017 BATC Board of Directors Spotlight</strong></h2>


                <div className="box">
                    <article className="media">
                        <div className="media-left">


                        <StaffCard name="Luke Smith" title=" President" image={president} />

                    </div>

                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>What are you most looking forward to this season?</strong>
                                <br />
                                I look forward to meeting new members and promoting the sport of triathlon!
                                <br />
                                <strong>Favorite post race indulgence:</strong>
                                <br />
                                I always go for the bags Utz chips that are at the finish line of all the local races.
                                <br />
                                <strong>How/why did you become involved in triathlons?</strong>
                                <br />
                                Triathlon was a natural progression starting out as a runner.  I bought a bike to
                                cross train for running and before I knew it, I was signing up for my first tri.
                                <br />
                                <strong>Best part about BATC:</strong>
                                <br />
                                The group workouts.. working out with people keeps you motivated to reach your training
                                goals.
                                <br />
                                <strong>Share a mantra you follow:</strong>
                                <br />
                                Always Lead, Never Follow
                            </p>
                        </div>

                    </div>
                </article>
                </div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">


                            <StaffCard name="Katie Damaroda" title=" Secretary" image={secretary} />

                        </div>

                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>What are you most looking forward to this season?</strong>
                                    <br />
                                    Finishing my first 70.3
                                    <br />
                                    <strong>Memorable race/training moment:</strong>
                                    <br />
                                    When training for my first marathon, my friend Megan jokingly told me “I’m not
                                    coming to watch you finish last.” That was very motivating for me and helped me
                                    get over the proverbial wall.
                                    <br />
                                    <strong>How/why did you become involved in triathlons?</strong>
                                    <br />
                                    I’ve never enjoyed swimming and despite growing up spending summers on the bay,
                                    the idea of open water swimming just seemed crazy to me. I began training for my
                                    first triathlon as a way <br />to overcome that and challenge myself. I still would much
                                    rather be on the water than in it, but it’s a work in progress.
                                    <br />
                                    <strong>Best part about BATC:</strong>
                                    <br />
                                    Obviously the members! BATC is an awesome community. I appreciate all of the
                                    advice, encouragement, and accountability I have received. I hope that I can
                                    make the same impact.
                                    <br />
                                    <strong>Non-triathlon related hobbies or interests:</strong>
                                    <br />
                                    Hiking, taking my dog Molly for walks, beach volleyball, etc.
                                </p>
                            </div>

                        </div>
                    </article>
                </div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">


                            <StaffCard name="Linda Anders" title=" Treasurer" image={treasurer} />

                        </div>

                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>What are you most looking forward to this season?</strong>
                                    <br />
                                    This is a rebuilding year for me. Big priority on getting my biking legs back
                                    for my Tour de Pink 200 mile/3 day bike ride in California, raising money and
                                    awareness for the Young Survival Coalition

                                    <br />
                                    <strong>Memorable race/training moment:</strong>
                                    <br />
                                    Proudest moment was making it up the wall and earning my brick at the 2013
                                    Savageman — thanks to Sheryl Savage for making sure I beat the clock!
                                    <br />
                                    <strong>Favorite post race indulgence:</strong>
                                    <br />
                                    A super cold beer with me in a super hot and super long shower.
                                    <br />
                                    <strong>Best part about BATC:</strong>
                                    <br />
                                    Undoubted the fantastic members!
                                    goals.
                                    <br />
                                    <strong>Non-triathlon related hobbies or interests:</strong>
                                    <br />
                                    Maryland lacrosse – I coach two U 13 girls teams, which keeps me hopping from March through May.
                                </p>
                            </div>

                        </div>
                    </article>
                </div>

            </div>





    )
}

function StaffCard(props) {
    return (
        <figure className="staff-card">
            <img className="staff-image" src={props.image} alt={props.name}/>
            <figcaption><strong>{props.name}</strong>{props.title}</figcaption>
        </figure>
    )
}

export default function About() {
    return (
        <div>


            <HistoryText/>
            <StaffBios/>
            <div id="finish">
            </div>

        </div>



    );
}