/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "~/test-utils";
 
import NewStoryPage from "~/pages/stories/new";

describe("NewStoryPage", () => {
    test("creates a quest for a story", () => {
        render(<NewStoryPage />);
    });

    test.todo("the quest has at least one component");
    test.todo("shows an error message when the story doesn't exist");
});