import sources from "../../data/tool_external_source.json";
import { OS_LABEL } from "../util/os";

function getExternalSource(tool: CreateNextStack.Tool) {
    return sources.find((source) => {
        return (
            source.tool_id === tool.id &&
            /** Dunno why but typescript yields for undefined if not casted lol */
            source.platforms.includes(OS_LABEL)
        );
    });
}

export default getExternalSource;