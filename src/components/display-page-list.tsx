import {containerPageClass} from "@/util/constants";
import {ReadWebpageJsonFile} from "@/components/read-json-files";
import React from "react";

/**
 * Basic function to display a website page list from my json files.
 * @param pageHref The base url for the page, such as '/misc' or '/misc/test1'
 * @param pageHeader The header for the page.
 * @param pageDescription The description, shown under the header.
 * @param jsonFile The json file to load the page list info from.
 */
export default function DisplayPageList(pageHref: string, pageHeader: string, pageDescription: string, jsonFile: string) {
    return (
        <>
            <br></br>
            <h1 className="text-4xl text-center text-indigo-500 text-bold">{pageHeader}</h1>
            <br></br>

            <div className={containerPageClass}>
                <p className="text-center">{pageDescription}</p>

                {ReadWebpageJsonFile(pageHref, jsonFile)}
            </div>
        </>
    )
}