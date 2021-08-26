/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "~/test-utils";
import sinon from "sinon";
import router from "next/router";

import NewStoryPage from "~/pages/stories/new";

describe("NewStoryPage", () => {
    test("creates a quest for a story", () => {
        const mockRouterPush = sinon.stub(router, "push");

        render(<NewStoryPage />);
        // TODO FIXME: clean up the selectors to use data-testid
        const textbox = screen.getByRole("textbox");
        expect(textbox).toBeEnabled();
        const value = "The Neverending Story";
        
        fireEvent.change(textbox, { target: { value } });
        fireEvent.click(screen.getByRole("button"));

        expect(mockRouterPush).toHaveBeenCalledWith("/stories");
    });

    test.todo("the quest has at least one component");
    test.todo("shows an error message when the story doesn't exist");
});