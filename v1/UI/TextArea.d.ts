/**
 * A multi line text area - optionally supporting rich text.
 * @module UI / Control / Text Area
 */

/**
 * Text area interface
 */
interface MEUITextArea extends MEUISizeBase {
    /**
     * The type of the UI element. Either "TextArea" or "RichText".
     */
    readonly Type: "TextArea" | "RichText";
    /**
     * The placeholder text shown when there is no value.
     */
    Placeholder: string;
    /**
     * The current value of the control.
     */
    Value: string;
    /**
     * The html encoded version of the value.
     */
    ValueHtmlEncoded: string;
    /**
     * Flag indicating if the text area supports bold text. Note that all fonts must support those variants.
     */
    SupportBold: boolean;
    /**
     * Flag indicating if the text area supports italic text. Note that all fonts must support those variants.
     */
    SupportItalic: boolean;
    /**
     * Flag indicating if the text area supports font size changes.
     */
    SupportFontSize: boolean;
    /**
     * Flag indicating if the text area supports font family changes. Please provide a list of supported fonts in {@link RichTextFontArray}.
     */
    SupportFont: boolean;
    /**
     * Flag indicating if the text area supports underline formatting.
     */
    SupportUnderline: boolean;
    /**
     * The list of available fonts to use. Must be the font family names and all fonts must be available for the editor to use.
     */
    RichTextFontArray: string[];
    /**
     * Event gets fired when the value of the text area changes.
     * @param event The callback to trigger when the value changes.
     */
    OnChange(event: (textArea: MEUITextArea) => void): void;
    /**
     * Event gets fired when the text area gets focus.
     * @param event The callback to trigger when the text area gets focus.
     */
    OnFocus(event: (textArea: MEUITextArea) => void): void;
    /**
     * Event gets fired when the text area loses focus.
     * @param event The callback to trigger when the text area loses focus.
     */
    OnBlur(event: (textArea: MEUITextArea) => void): void;
    /**
     * Event gets fired when a key is released
     * @param event The callback to trigger when a key is released.
     */
    OnKeyUp(event: (textArea: MEUITextArea, event: KeyboardEvent) => void): void;
    /**
     * Event gets fired when a key is pressed
     * @param event The callback to trigger when a key is pressed.
     */
    OnKeyDown(event: (textArea: MEUITextArea, event: KeyboardEvent) => void): void;
}

/**
 * Text area constructor interface
 */
interface MEUITextAreaConstructor 
{
    /**
     * Creates a new text area
     * @param value The initial value of the text area.
     * @param width The width of the text area or null for the default value.
     * @param height The height of the text area or null for the default value.
     * @param change The event which is fired when the value of the text area changes.
     * @returns A new text area.
     */
    new (value: string, width?: number, height?: number, change?: (textArea: MEUITextArea) => void): MEUITextArea;
    readonly prototype: MEUITextArea;
}

/**
 * The text area class
 */
declare const MEUITextArea: MEUITextAreaConstructor;