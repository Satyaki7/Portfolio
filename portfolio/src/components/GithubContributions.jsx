import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";

export default function GithubContributions() {
    useEffect(() => {
        // Attach calendar to the div with class ".calendar"
        GitHubCalendar(".calendar", "Satyaki7", {
            responsive: true,
        });
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="calendar">Loading GitHub data...</div>
        </div>
    );
}
